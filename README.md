# MarmoTrack

MarmoTrack é um sistema web abrangente em desenvolvimento para o gerenciamento operacional e comercial de marmorarias. Ele visa unificar em uma única plataforma, desde a criação do orçamento, passando pela aprovação comercial, agendamento de medição (PCP), acompanhamento de projetos e etapa de produção, até a entrega.

## 🚀 Versão Atual: **v0.2.3 - Engenharia de Campo & Cadeia de Custódia**

### Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + Lucide Icons
- **Backend/Banco de Dados:** Supabase (PostgreSQL)
- **Validações:** Zod + React Hook Form

## 🌟 Funcionalidades Principais (Até o momento)

- **Autenticação e Perfis:** Login seguro e controle de permissões em níveis (Administradores, Vendedores, Medidores, etc.).
- **Módulo Comercial (Pedidos):**
  - Criação de Orçamentos com numeração única sequencial.
  - Conversão de Orçamentos em Pedidos Aprovados.
  - Identificação de Urgência e Datas Prometidas.
  - **Suporte a Itens Dinâmicos:** CRUD completo de ambientes, peças, acabamentos e serviços por pedido, com persistência via JSONB em `pedidos_itens_v2`.
  - **Importação Inteligente (PDF):** Parser State Machine para extração automática de dados do ERP, com fallback manual para edição pelo operador.
  - Sistema de "Soft Delete" seguro com auditoria de motivo para descarte de pedidos, reciclando e liberando o número de orçamento original.
- **Auditoria de Eventos (Event Sourcing):** Timeline detalhada para cada pedido, rastreando mudanças de status, aprovações, edições e exclusões com o respectivo usuário responsável.
- **Fila de Medições (PCP - Planejamento e Controle da Produção):**
  - Integração Automática: Pedidos recém-aprovados entram dinamicamente na fila como pendentes de medição.
  - Alertas Visuais: Sistema avisa de forma visual quando um pedido aprovado por algum motivo se encontra sem agenda ou teve sua medição cancelada.
  - Filtros avançados na fila (Ativas, Concluídas, Canceladas, Todas).
- **Inteligência Estratégica & Kanban (PCP Avançado):**
  - Engine paramétrica de cruzamento de *Carga Horária x Área Fabricada*.
  - **Simulador de Impacto PCP:** Modal para previsão de gargalos em Orçamentos futuros cruzando capacidade máxima diária (Corte/Polimento).
  - Farol de Fabricação com termômetros integrados aos relatórios da diretoria.
- **Agenda de Medição:**
  - Gerenciador customizado para atribuição de medidores, datas, horários e observações operacionais.
  - **Módulo de Execução In Loco:** Interface mobile-friendly para técnicos registrarem medidas reais, peças adicionais e pendências diretamente na obra.
  - **Auditoria de Divergência:** Flag automática de "Extra In Loco" para itens adicionados no campo, alertando comercial e produção.
- **Setor de Projetos (Engenharia):**
  - Fila de projetos alimentada automaticamente por medições concluídas.
  - Geração de etiquetas de rastreabilidade (QR Code) por ambiente.
  - **Cadeia de Custódia Reversa:** Funcionalidade de "Devolver para Medição" com log de motivos, permitindo que a engenharia solicite re-medições ao campo com rastreabilidade total via `alertas_producao`.
- **Fila de Produção & Kanban:**
  - Visualização de ordens de produção com badges de alerta de divergência vinda da medição.
  - Sistema de "Soft Delete" de peças no Kanban com registro automático de perdas/alertas no pedido original.

## 🛠 Como Executar Localmente

\`\`\`bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
\`\`\`
*Nota: É necessário possuir as credenciais do Supabase configuradas no arquivo `.env.local`.*

## 📄 Licença
Projeto Privado. Todos os direitos reservados.

# Changelog

Todas as mudanças notáveis no projeto MarmoTrack são documentadas aqui.

## [0.2.4] - 2026-03-13 - Controle de Produção e Kanban de Peças

### ✨ Validado & Entregue
- **Kanban de Produção:** Implementação de um painel interativo (`KanbanBoard`) para acompanhamento em tempo real do status das peças em chão de fábrica.
- **Gestão de Status:** Criação de modelagem (`status_pecas_kanban`) e Server Actions integradas (`fila_producao.ts`, `kanban.ts`) permitindo o rastreamento fluido pelas etapas da operação.
- **Integração Visual:** Interface atualizada para prover clareza ao gestor da produção sobre os gargalos em painéis organizados.

## [0.2.3] - 2026-03-12 - Engenharia de Campo & Cadeia de Custódia (PCP Industrial)

### ✨ Validado & Entregue
- **Módulo de Execução In Loco:** Nova interface reativa (`useFieldArray`) para tablets, permitindo que o medidor ajuste cotas e adicione "Itens Extras" com flag de auditoria.
- **Motor de Reversão (Custódia):** Implementação da `devolverParaMedicaoAction` permitindo que o projetista devolva a O.P. para o medidor com logs de motivo no JSONB `alertas_producao`.
- **Telemetria de Divergência:** Injeção de Badges ⚠️ **Extra In Loco** e **Devolvido pelo Projeto** em todo o pipeline (Comercial, projetos, Produção).
- **Consolidação Técnica:** Refatoração de Queries SQL para Joins relacionais (`clientes`, `obras`) eliminando colunas redundantes na `pedidos_v2`.
- **Correção Full-Stack:** Fix do erro de status (Concluida vs Concluída) e suporte ao Sync Dynamic APIs do Next.js 15.

## [0.2.2] - 2026-03-11 - Inteligência Estratégica de Produção (PCP Avançado)

### ✨ Validado & Entregue
- **Arquitetura de Capacidade Produtiva:** Criação das tabelas `setup_capacidade_setor_v2` e `setup_tempos_padrao_v2` para cálculos paramétricos de tempo hora/homem.
- **Engine Analítico PCP:** Construção de Server Actions para cruzamento de horas das Ordens de Produção versus capacidade máxima dos setores.
- **Dashboard Executivo:** Implementação do **Farol de Produção** vibrante global e barras dinâmicas de carga por setor (Corte, Acabamento, Polimento).
- **Kanban Preditivo:** Injeção de percentuais de ocupação e previsão do *Slot Livre Seguro* nos cabeçalhos de coluna do quadro.
- **Simulador de Impacto:** Modal aritmético para o comercial/gestão simular o gargalo gerado por um orçamento grande antes de fechá-lo.
- **Alerta de Viabilidade Comercial:** Integração de uma *Badge Dinâmica* no formulário de Novo Pedido, bloqueando prazos inalcançáveis caso a fábrica supere 95% de carga.
- **Malha de Segurança (Fix de Pipeline):** Correções na relação `auth.users` que disparava o PGRST200 na Agenda de Medição, além de botões para reviver pedidos orfãos de agenda.

## [0.2.1] - 2026-03-11 - Reconstrução Arquitetural e CRUD de Itens

### ✨ Validado & Entregue
- **Monorepo Estruturado:** Frontend (Next.js) e Backend (Supabase) unificados na mesma raiz.
- **Banco de Dados Relacional:** Criação da tabela `pedidos_itens_v2` com colunas JSONB (`partes_medidas`, `acabamentos`, `servicos`) vinculada via FK e Delete Cascade à `pedidos_v2`.
- **UI 'Escape Hatch' (Fallback Manual):** Implementação de formulário dinâmico permitindo aos vendedores adicionar/editar ambientes e peças manualmente caso o PDF falhe.
- **CRUD Completo de Pedidos:**
  - Inserção em massa (Bulk Insert) de itens.
  - Edição com estratégia de `DELETE` + `INSERT` para evitar falhas de sincronia de arrays complexos.
  - Número do Orçamento bloqueado (`readOnly`) durante a edição.
- **Preparação PCP:** Coluna `checklist_tecnico` (JSONB) criada na tabela `medicoes_v2`.

### ⚠️ Erros Conhecidos (Technical Debt)
- **Parser PDF (v2):** A atualização do `pdf-parse` para a v2 alterou a extração bruta do texto (esmagamento horizontal de colunas). Isso afeta a Regex da State Machine, impedindo a leitura automática de 100% do cabeçalho (Cidade, Cliente) e ignorando algumas peças. Bypass atual: Uso da interface manual. Resolução programada para um update futuro focado em calibração de Regex.

## [0.2.0] - 2026-03-07 - Fundação v2

### Adicionado
- Migração completa para a arquitetura v2 (pedidos_v2, medicoes_v2).
- Módulo Comercial com CRUD de pedidos.
- Fila de Medições (PCP) com integração automática.
- Agenda de Medição com atribuição de medidores.
- Event Sourcing (auditoria de eventos operacionais).
- Autenticação e perfis com controle de permissões.
