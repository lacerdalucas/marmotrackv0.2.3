# Histórico de Implementação - MarmoTrack

Este documento traça a linha do tempo do desenvolvimento do MarmoTrack, separando o que já foi construído (versões passadas e a atual) e o roteiro arquitetado para as versões futuras.

## 🟢 Fase 1: Fundação e Setup Inicial (Concluída - v0.1.0)
- Inicialização do projeto em Next.js (App router) com TailwindCSS.
- Configuração do Supabase (Autenticação e Database PostgreSQL).
- Criação das tabelas base (Perfis de usuário, Clientes, Obras).
- Layout Dashboard (Sidebar, Topbar) com UI/UX focada em dark mode industrial (tons de zinco/preto e cores de destaque via Tailwind).

## 🟢 Fase 2: Módulo Comercial e Pedidos (Concluída - v0.1.5)
- Criação da Tabela \`pedidos_v2\` responsável por absorver Orçamentos e Pedidos Aprovados.
- UI para criação, edição e listagem de pedidos, contendo buscas por cliente e obra.
- Sistema de validação via Zod (frontend e backend).
- Inserção de um sistema robusto de Event Sourcing (\`eventos_operacionais\`) gerando uma timeline por pedido auditando tudo o que acontece (quem alterou, quando e o quê).
- Regra de negócios implementada: "Soft Delete" que reescreve IDs para liberar chaves únicas em caso de erro do usuário e anota no histórico.

## 🟢 Fase 3: PCP - Integração e Gestão de Medições (Concluída - v0.2.0 - ATUAL)
- Criação e integração da tabela \`medicoes_v2\`.
- **Gatilho de Negócios 1:** Converter um pedido de "Orçamento" para "Aprovado" automaticamente projeta a requisição de medição para a interface de Fila do PCP, em status \`PENDENTE\`.
- Painel "Fila de Medição" em modo Kanban-style Cards, permitindo visualização rica, e exclusões com tripla checagem (Restrita para Administradores).
- Filtros via URL Search Params adicionados à fila (Ativas/Concluídas/Canceladas).
- Painel "Agenda". Reformulação do fluxo de designação: os despachadores (Admins/Opers) utilizam o modal para capturar uma Ordem de Medição já existente como \`PENDENTE\` e vinculam um Técnico local e a Data da Visita (Status \`Agendada\`).
- Tratamento contínuo da integridade entre a Tela de Pedidos (Comercial) e as Medições: Adição de Alertas ⚠️ que assinalam visualmente pedidos Comerciais que estejam órfãos de suas medições (ex: medição acidentalmente cancelada).

---

## 🟡 Fase 4: Frontend PWA Mobile-First para o Técnico de Medição (A Fazer - v0.3.0)
- **Objetivo:** Uma visualização simplificada para celulares focada no "Técnico de Medição / Medidor".
- Visualização de Rotas e detalhes de Observações no celular.
- Ação "Check-in na Obra" mudando o status para \`Em Andamento\`.
- Formulário na Obra apontando se está **"Apto para Projeto"** ou se **"Possui Pendências"**, podendo preencher fotos/textos na ausência de insumos (bancadas não niveladas, etc.).
- Evento de checkout finalizando o processo de Medição (mudando para \`Concluída\` ou \`Frustrada\`).
- *Integração opcional de calendário (ex: Google Agenda) para sync duplo com os técnicos de rua.*

## 🟡 Fase 5: Módulos de Projeto & Produção (A Fazer - v0.4.0)
- **Fila de Projeto / CAD:** Pedidos recém-marcados como "Medição Apta" ou marcados como "Dispensados de Medição" na fase Comercial devem chegar ao painel de Desenhistas.
- Alocação de Desenhistas, upload de Prancha em PDF, aprovação final do cliente no risco.
- **Fila de Produção:** Separação de rotinas para Serrada (Corte Mestre), Acabamento (Bancadas prontas) e Controle de Qualidade (Inspeção antes do Envio).

## 🟡 Fase 6: Almoxarifado / Estoque de Chapas (A Fazer - v0.5.0)
- Cadastro de fornecedores de chapas e blocos básicos.
- Baixa da chapa no momento que for requisitada pela área de Corte, gerando custo precisoçado pelo pedido/ordem de serviço.

## 🟡 Fase 7: Fila de Instalação e Entrega (A Fazer - v0.6.0)
- Agenda de montadores, check-list de instalação e finalização de O.S com a "Entrega Chaves" no cliente.

## 🟡 Fase 8: Relatórios e Faturas (Visão Futura)
- Geração inteligente do Custo vs. Lucro do projeto embasado nos materiais gastos da Fase 6 e nas horas anotadas entre as fases operacionais.
