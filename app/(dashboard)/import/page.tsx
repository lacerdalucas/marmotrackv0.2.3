// app/(dashboard)/import/page.tsx
// Tela 1: Escolha do PDF de Origem
export default function ImportPage() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Importar Orçamento (PDF)</h1>
            <p className="text-gray-500 mb-8">Faça o upload do documento gerado pelo sistema comercial. O sistema extrairá as peças sugeridas para sua revisão estrutural.</p>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Clique para selecionar ou arraste o PDF</h3>
                <p className="mt-1 text-sm text-gray-500">Apenas arquivos .pdf do sistema Promob/ERP Legado</p>

                {/* Simulação: Botão que levaria para a tela de revisão fictícia após Upload e trigger do Deno -> Retorna um Job ID */}
                <a href="/import/demo-job-123" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    (MOCK) Simular Upload & Iniciar Revisão
                </a>
            </div>
        </div>
    )
}
