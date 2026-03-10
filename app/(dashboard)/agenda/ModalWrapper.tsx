'use client';

import React, { useState } from 'react';
import ModalAgendarMedicao from '@/components/agenda/ModalAgendarMedicao';
import { Plus } from 'lucide-react';

interface ModalWrapperProps {
    medicoesPendentes: any[];
    tecnicos: any[];
}

export default function ModalWrapper({ medicoesPendentes, tecnicos }: ModalWrapperProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-all shadow-lg flex items-center gap-2"
            >
                <Plus className="w-4 h-4" />
                Gerenciar Agendamento
            </button>

            <ModalAgendarMedicao
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                medicoesPendentes={medicoesPendentes}
                tecnicos={tecnicos}
            />
        </>
    );
}
