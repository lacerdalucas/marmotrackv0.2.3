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