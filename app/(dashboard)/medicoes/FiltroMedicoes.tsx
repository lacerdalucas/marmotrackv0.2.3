'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Filter } from 'lucide-react';

export function FiltroMedicoes() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentFilter = searchParams.get('status') || 'ativas';

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('status', e.target.value);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-zinc-400 hidden sm:block" />
            <select
                value={currentFilter}
                onChange={handleFilterChange}
                className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 block p-2 hover:bg-zinc-800 transition-colors cursor-pointer outline-none"
            >
                <option value="ativas">Mostrar: Ativas</option>
                <option value="concluidas">Mostrar: Concluídas</option>
                <option value="canceladas">Mostrar: Canceladas</option>
                <option value="todas">Mostrar: Todas</option>
            </select>
        </div>
    );
}
