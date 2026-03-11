# Changelog

Todas as mudanças notáveis no projeto MarmoTrack são documentadas aqui.

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
