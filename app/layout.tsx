import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
    title: 'MarmoTrack',
    description: 'Sistema Operacional para Marmorarias - Rastreabilidade e Gestão',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
                <Toaster richColors position="top-right" duration={4000} />
            </body>
        </html>
    )
}
