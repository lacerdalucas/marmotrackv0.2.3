'use client';

import React, { useTransition } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { concluirExecucaoMedicaoAction } from '@/app/actions/execucao_medicao';
import { toast } from 'sonner';
import { Plus, Trash2, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const execucaoSchema = z.object({
    itens: z.array(z.object({
        ambiente: z.string().min(1, 'Ambiente obrigatório'),
        material: z.string().min(1, 'Material obrigatório'),
        item_extra_medicao: z.boolean(),
        partes_medidas: z.array(z.object({
            peca: z.string().min(1, 'Nome da parte'),
            comprimento: z.string(),
            largura: z.string(),
            quantidade: z.string(),
            observacoes: z.string().optional()
        })),
        acabamentos: z.array(z.object({ descricao: z.string() })),
        servicos: z.array(z.object({ descricao: z.string() }))
    }))
});

type ExecucaoData = z.infer<typeof execucaoSchema>;

export default function ExecucaoMedicaoForm({ medicao, pedido }: { medicao: any, pedido: any }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    // Default: Itens antigos que vieram da Venda
    const defaultItens = (pedido.pedidos_itens_v2 || []).map((it: any) => ({
        ambiente: it.ambiente || '',
        material: it.material || '',
        item_extra_medicao: it.item_extra_medicao || false,
        partes_medidas: it.partes_medidas || [],
        acabamentos: it.acabamentos || [],
        servicos: it.servicos || []
    }));

    const form = useForm<ExecucaoData>({
        resolver: zodResolver(execucaoSchema),
        defaultValues: { itens: defaultItens.length > 0 ? defaultItens : [] }
    });

    const { fields, append, remove } = useFieldArray({ name: 'itens', control: form.control });

    const onSubmit = (data: ExecucaoData) => {
        startTransition(async () => {
            const res = await concluirExecucaoMedicaoAction(medicao.id, pedido.id, data.itens);
            if (res.success) {
                toast.success(res.message);
                router.push('/projetos');
            } else {
                toast.error(res.message);
            }
        });
    };

    const handleAddExtra = () => {
        append({
            ambiente: 'Novo Ambiente (Adendo)',
            material: 'Material',
            item_extra_medicao: true, // FLAG AUDITORIA DE NASCIMENTO NA OBRA
            partes_medidas: [{ peca: 'Peça Extra', comprimento: '', largura: '', quantidade: '1' }],
            acabamentos: [],
            servicos: []
        });
        toast.info('Item Extra adicionado! A engenharia será notificada desta divergência.');
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-20">
            {/* Headers / Instrucoes */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm text-blue-300 leading-relaxed font-medium">
                    <AlertTriangle className="w-5 h-5 inline-block text-blue-400 mr-2 -mt-1" /> 
                    Técnico, use esta ficha para bater as medidas in loco com as da venda. Se o cliente solicitar novos cortes na obra, use o botão de <strong>Item Extra</strong>. Peças deletadas daqui sairão do projeto final. Confirme todas as cotas antes de <strong>Concluir Medição</strong>.
                </p>
            </div>

            <div className="space-y-6">
                {fields.map((field, index) => {
                    const isExtra = form.watch(`itens.${index}.item_extra_medicao`);

                    return (
                        <div key={field.id} className={cn("p-5 border rounded-xl bg-zinc-950 transition-colors shadow-sm relative", isExtra ? "border-amber-500/50 shadow-amber-500/10" : "border-zinc-800")}>
                            
                            {/* Toolbar do Item */}
                            <div className="flex items-start justify-between mb-4 border-b border-zinc-800 pb-4">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">Ambiente {index + 1}</h3>
                                        {isExtra && <span className="text-[10px] bg-amber-500/20 text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Extra da Obra</span>}
                                    </div>
                                    <div className="mt-3 flex gap-4">
                                        <input type="text" {...form.register(`itens.${index}.ambiente`)} placeholder="Nome do Ambiente" className="w-48 bg-zinc-900 border border-zinc-800 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                                        <input type="text" {...form.register(`itens.${index}.material`)} placeholder="Material (Ex: Granito)" className="w-40 bg-zinc-900 border border-zinc-800 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                                <button type="button" onClick={() => remove(index)} className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded transition-colors" title="Descartar Peça da Obra">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Ficha Dinamica (Sub-Itens) */}
                            <SubFieldArray control={form.control} itemIndex={index} form={form} />
                        </div>
                    );
                })}
            </div>

            {/* Ações Inferiores */}
            <div className="flex flex-col sm:flex-row gap-4 items-center border-t border-zinc-800 pt-6 mt-8">
                <button type="button" onClick={handleAddExtra}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-amber-500 font-semibold px-6 py-3 rounded-lg border border-amber-500/20 transition-all">
                    <Plus className="w-4 h-4" /> Adicionar Item Extra
                </button>

                <div className="flex-1" />

                <button type="submit" disabled={isPending}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50 text-base">
                    {isPending ? <Loader2 className="w-5 h-5 animate-spin"/> : <CheckCircle2 className="w-5 h-5" />}
                    Concluir Medição
                </button>
            </div>

            {Object.keys(form.formState.errors).length > 0 && (
                <div className="text-xs text-red-500 mt-4 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    O formulário possui campos obrigatórios em branco. Verifique os ambientes adicionados.
                </div>
            )}
        </form>
    );
}

// -----------------------------------------------------
// SUB-FORMULARIO: Partes (Comprimento x Largura)
// -----------------------------------------------------
function SubFieldArray({ control, itemIndex, form }: any) {
    const { fields, append, remove } = useFieldArray({ control, name: `itens.${itemIndex}.partes_medidas` });

    return (
        <div>
            <div className="space-y-3">
                {fields.map((field, pIdx) => (
                    <div key={field.id} className="flex flex-row items-center gap-2 flex-wrap sm:flex-nowrap bg-zinc-900 p-2 rounded border border-zinc-800/80">
                        <input type="text" {...form.register(`itens.${itemIndex}.partes_medidas.${pIdx}.peca`)} placeholder="Ex: Roda-pé" title="Descrição da Ficha" className="w-full sm:w-40 bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs text-white outline-none" />
                        <span className="text-zinc-600 text-xs hidden sm:inline">C:</span>
                        <input type="text" {...form.register(`itens.${itemIndex}.partes_medidas.${pIdx}.comprimento`)} placeholder="Comp." title="Comprimento" className="w-20 sm:w-16 bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs text-zinc-300 outline-none text-center" />
                        <span className="text-zinc-600 text-xs hidden sm:inline">L:</span>
                        <input type="text" {...form.register(`itens.${itemIndex}.partes_medidas.${pIdx}.largura`)} placeholder="Larg." title="Largura" className="w-20 sm:w-16 bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs text-zinc-300 outline-none text-center" />
                        <span className="text-zinc-600 text-[10px] hidden sm:inline ml-1 font-bold">Qtd:</span>
                        <input type="number" {...form.register(`itens.${itemIndex}.partes_medidas.${pIdx}.quantidade`)} placeholder="1" title="Quantidade" className="w-16 sm:w-12 bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs text-zinc-300 outline-none text-center" />
                        
                        <div className="flex-1" />
                        <button type="button" onClick={() => remove(pIdx)} className="text-zinc-500 hover:text-red-400 p-1 rounded-sm hover:bg-zinc-800 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ))}
            </div>
            <button type="button" onClick={() => append({ peca: 'Nova Parte (Em Obra)', comprimento: '', largura: '', quantidade: '1' })}
                className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 px-2 py-1.5 rounded bg-blue-500/5 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all">
                <Plus className="w-3 h-3" /> Fatiar Nova Peça/Aba
            </button>
        </div>
    );
}
