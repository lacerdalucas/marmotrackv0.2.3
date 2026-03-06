# project-context.md

## Projeto
MarmoTrack

## Objetivo
Aplicativo para gestão operacional de marmoraria, cobrindo venda, medição, projeto, planejamento, produção, expedição e instalação, com rastreabilidade por QR code.

## Stack desejada
- Frontend: React / Expo
- Backend: Supabase
- Banco: PostgreSQL
- Storage: Supabase Storage
- Auth: Supabase Auth

## Estrutura do projeto
- docs/: documentação e especificações
- app/: frontend
- supabase/: migrations, schema e funções
- README.md: visão geral do projeto

## Estado atual
- há um documento mestre de requisitos em docs/PROJECT_BRIEF.md
- o sistema ainda está em fase de definição arquitetural
- prioridade atual: arquitetura, banco, frontend inicial e fluxo do MVP

## Regras de trabalho para a IA
- sempre ler docs/PROJECT_BRIEF.md antes de propor mudanças
- não inventar módulos fora do escopo sem justificar
- manter separação clara entre MVP e roadmap futuro
- priorizar uso em celular
- priorizar simplicidade operacional
- preservar rastreabilidade de eventos e histórico