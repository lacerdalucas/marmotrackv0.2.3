# Changelog

Todas as mudanças notáveis no projeto MarmoTrack são documentadas aqui.

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
