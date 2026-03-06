// lib/auth/permissions.ts
// Centralization of permission roles for MarmoTrack (Single Source of Truth)

// Todos os papéis que existem no banco (Migration 02)
export type Role =
    | 'administrador'
    | 'gestor'
    | 'pcp'
    | 'operador'
    | 'vendedor'
    | 'medidor'
    | 'projetista'
    | 'instalador'

// Mapeamento de quem pode acessar o dashboard web (PCP/Gerência/Venda)
const WebRoles: Role[] = ['administrador', 'gestor', 'pcp', 'vendedor', 'projetista']

// Mapeamento de quem deve ser direcionado à visão de chão de fábrica/mobile (Operador)
const FieldRoles: Role[] = ['operador', 'medidor', 'instalador']

/**
 * Retorna true se a Role fornecida pode acessar a rota `/dashboard` e suas dependências Web
 */
export function canViewDashboard(role: string): boolean {
    return WebRoles.includes(role as Role)
}

/**
 * Retorna true se a Role fornecida deve usar a interface simplificada Scanner/Campo
 */
export function canViewScanner(role: string): boolean {
    return FieldRoles.includes(role as Role)
}

/**
 * Resolve a URL inicial do usuário após o Login com base em sua Role.
 */
export function getRedirectRouteByRole(role: string): string {
    if (canViewDashboard(role)) return '/dashboard'
    if (role === 'operador') return '/scanner'
    if (role === 'medidor') return '/field/measurement'
    if (role === 'instalador') return '/field/installation'

    // Default de fallback de segurança
    return '/login?error=role_not_mapped'
}
