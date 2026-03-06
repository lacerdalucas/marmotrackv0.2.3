'use client'

import { useState } from 'react'
import { loginAction } from './actions'

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(formData: FormData) {
        setError(null)
        setLoading(true)

        // Server action invocada do client component
        const response = await loginAction(formData)

        // Se response voltar, é erro. O redirect() lá dentro interrompe o fluxo normal p/ sucesso.
        if (response?.error) {
            setError(response.error)
            setLoading(false)
        }
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">MarmoTrack</h1>
                    <p className="text-sm text-gray-500">
                        Acesso ao Sistema Operacional M-Track
                    </p>
                </div>

                <form action={handleSubmit} className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="nome@marmoraria.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded border border-red-100">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-10 mt-2 bg-zinc-900 text-white font-medium rounded-md hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? 'Autenticando...' : 'Entrar no Sistema'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
