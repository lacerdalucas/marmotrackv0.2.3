# PROJECT BRIEF E ESPECIFICAÇÃO TÉCNICA: MarmoTrack

## 1. Visão Geral e Objetivo do Produto
O **MarmoTrack** é um "Sistema Operacional para Marmorarias". Ele atua gerenciando a produção, o chão de fábrica e a instalação, integrando-se (via importação de orçamentos) ao ERP comercial já existente [1, 2]. O sistema abandona o acompanhamento genérico por "pedido" e foca na **rastreabilidade granular por peça** via QR Code, operando sob uma arquitetura de orquestração determinística [3]. 

**Problema resolvido:** Falta de rastreabilidade na produção, idas perdidas à obra por falta de preparação, retrabalhos por projetos desatualizados e incapacidade de medir capacidade produtiva e gargalos matematicamente [4, 5].

---

## 2. Arquitetura do Sistema
O sistema adota uma arquitetura em 3 camadas, isolando a inteligência da execução determinística para garantir auditabilidade [6-8]:

*   **Frontend (Web/PWA):** `Next.js (App Router)` + `Tailwind CSS`. Interface responsiva, com versão Mobile-First (PWA) otimizada para uso com luvas no chão de fábrica (leitura de QR Code) [9-11].
*   **Backend & Database:** `Supabase (PostgreSQL)`. Autenticação nativa, Storage para anexos e forte uso de **Row Level Security (RLS)** focado em Multitenancy (`company_id`) [12].
*   **Camada de Execução Determinística:** Transições de status são feitas **exclusivamente via RPCs (Stored Procedures)** no PostgreSQL para garantir consistência de transações e logs imutáveis [12-14].
*   **AI & Ingestão de Dados (Edge Functions):** Uso do `Deno` no Supabase para parsear orçamentos em PDF do ERP e convertê-los em linhas estruturadas de banco de dados, sem OCR visual nesta primeira fase, operando apenas com extração de texto nativo [15-17].

---

## 3. Modelagem do Banco de Dados (Core Entities)
O banco de dados relacional (PostgreSQL) será estruturado com chaves `UUID` (`gen_random_uuid()`) e controle de tenant obrigatório [18, 19].

### 3.1. Administração e Governança
*   `companies`: Base do multitenancy (ex: id, name, active) [18].
*   `users_profile`: Relacionamento com `auth.users` do Supabase e `company_id` [18].
*   `roles`: Níveis de acesso e permissões.
*   `services_catalog`: Catálogo de serviços espelhado do ERP legado (chave composta `company_id` + `erp_code`) [20].
*   `slab_limits`: Dimensões máximas de chapa (comprimento e largura) por material/fornecedor para validação de paginação [21].

### 3.2. Orçamentação (Pipeline de Ingestão via PDF)
*   `import_batches`: Lotes de importação contendo o arquivo original no Storage [22].
*   `project_line_items`: Linhas brutas e tipificadas extraídas do PDF do ERP, aguardando revisão humana [23, 24].

### 3.3. Produção e Rastreabilidade (O Core)
*   `projects`: Entidade mestre vinda do ERP (ex: `erp_budget_number` = 3124) [25].
*   `project_environments`: Ambientes lógicos (Cozinha, Banheiro) [26].
*   `project_pieces`: A peça física de pedra (ex: Tampo, Ilha). Possui sufixo sequencial (ex: `3124-01`) atrelado ao QR Code [26, 27].
*   `piece_parts` & `piece_operations`: Dimensões exatas e os serviços/acabamentos associados àquela peça [28, 29].
*   `production_stages`: O fluxo do Kanban (ex: Comercial, Medição, Corte, Acabamento, Expedição, Instalação) [30].
*   `piece_status_history`: **Log imutável** gravado a cada "bipada" do QR Code (id, piece_id, previous_stage, new_stage, changed_by, changed_at) [31].
*   `project_tasks`: Checklists obrigatórios (Gatilhos / Gates) para avançar de etapa [32].

---

## 4. Estrutura do Frontend
O App Router do Next.js deve abrigar as seguintes áreas principais [33]:

1.  **/dashboard**: Visão gerencial (Lead time, itens parados, SLA, gargalos).
2.  **/import**: Interface *Human-in-the-loop* para subir PDFs do ERP, revisar as linhas processadas pela Edge Function e dar "Commit" gerando a O.S [34, 35].
3.  **/kanban**: Painel visual de arrastar-e-soltar (mas validado via RPC) exibindo o fluxo produtivo e as peças/projetos agrupados [32].
4.  **/project/[id] (Ficha Técnica)**: Central do projeto, lista de ambientes, peças, anexos, pendências e a "Timeline" (Histórico de logs) [36].
5.  **/scanner (PWA)**: Interface de leitura de QR Code usando câmera do celular. Exibe botões rápidos grandes de apontamento (ex: "Recebi", "Iniciei", "Concluí", "Pendência", "Retrabalho") [36, 37].
6.  **/settings**: Administração do catálogo de serviços, limites de chapa (`slab_limits`) e usuários [38, 39].

---

## 5. Perfis e Permissões (RBAC / RLS)
Políticas restritas regem o que cada usuário pode fazer, filtradas sempre via `current_company_id()` [40]:

*   **Vendedor (Comercial):** Cadastra briefing e aciona gatilho para medição [41]. Não altera o detalhamento técnico.
*   **Medidor:** Faz upload de fotos in loco e, criticamente, responde ao checklist de gate "Obra liberada?" (SIM/NÃO) [42, 43].
*   **Projetista:** Define as divisões/paginação das peças. O sistema alerta/bloqueia se ele criar uma peça sem emenda maior que o `slab_limits` [44, 45].
*   **PCP (Planejamento):** Define a fila de produção e emite as etiquetas (QR Codes) únicas para as peças [46].
*   **Operador de Produção:** Só pode interagir via leitura de QR Code para gerar apontamentos. Não edita dados de projeto [47].
*   **Instalador:** Atesta as condições da obra 24h antes e coleta a assinatura digital no final [47, 48].
*   **Admin/Gestor:** Controla catálogos e visualiza dashboards [37]. Não deve editar o histórico imutável das peças [32, 49].

---

## 6. Regras de Negócio e Orquestração (Gates)
*   **Regra de Mutabilidade:** O status da peça (`current_stage_id`) **nunca** é alterado via `UPDATE` direto no frontend. O frontend chama a RPC `transition_order_status()`, que checa pendências, atualiza o status e insere no `piece_status_history` transacionalmente [14, 32].
*   **Gate da "Obra Liberada":** A instalação não pode ser agendada nem a expedição pode enviar a pedra se a task "Obra Liberada" estiver pendente ou negativa no checklist do medidor [32, 48].
*   **Gate do Cliente:** O corte na produção não inicia sem aprovação formal (digital) do projeto pelo cliente [48].
*   **Validação Dimensional de Chapas:** Ao criar/editar uma peça com a flag `no_seam_required` (Sem emendas), o sistema consulta o tamanho no `slab_limits`. Se a peça for maior, acusa o status automático de `BLOCK`, impedindo a aprovação do projeto [44, 45, 50].

---

## 7. Backlog por Fases (MVP vs Roadmap Futuro)

### Fase 1: MVP (Foco na Rastreabilidade e Governança)
*   Setup do Next.js e Supabase (PostgreSQL + Auth) com RLS Multiempresa [12, 33].
*   Migrações do banco com as entidades CORE (`projects`, `pieces`, `stages`, `history`) e gatilhos de segurança (RPCs) [12].
*   Regra/Bloqueio dimensional de limite de chapas (`slab_limits`) [45].
*   Módulo Mobile de Scanner de QR Code para apontamento no chão de fábrica [36].
*   Dashboard Kanban e Fichas de Projeto [33].
*   Módulo de Ingestão: Edge function `parse_erp_pdf` para ler texto de orçamento PDF do ERP e interface para commit [16, 35].

### Fase 2: Otimização Operacional
*   SLA Analytics: Medição exata de tempo entre transições (tempo de fila vs tempo em máquina) [51].
*   WIP Limits (Limites de Trabalho em Progresso): Alertas caso um setor (ex: Acabamento) passe do limite de peças simultâneas permitidas [52].

### Fase 3: Roadmap Futuro (Evolução para SaaS de Construção)
*   Integração com OCR inteligente baseado em Visão Computacional para PDFs escaneados e croquis feitos à mão [35, 53].
*   Controle Granular de Estoque: Rastreamento de lote das chapas e apontamento exato de refugo [54].
*   Módulo Financeiro: Contas a pagar/receber, fluxo de caixa e conciliação bancária via Open Finance ou leitura de OFX [55, 56].
*   Empacotamento das regras de negócio como um "ERP Vertical SaaS" genérico para indústrias de transformação (vidraçarias, marcenarias, pré-moldados) [57, 58].