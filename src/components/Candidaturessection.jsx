import { useState } from 'react'
import { Users, FileText, Check, X } from 'lucide-react'

const CandidaturesSection = ({ candidatures = [], onUpdateStatus }) => {
    const [expandedLetter, setExpandedLetter] = useState(null)

    const statusConfig = {
        pending: {
            label: 'En attente',
            bg: 'bg-amber-100',
            color: 'text-amber-500',
            dot: 'bg-amber-400',
        },
        accepted: {
            label: 'Acceptée',
            bg: 'bg-green-100',
            color: 'text-green-500',
            dot: 'bg-green-500',
        },
        rejected: {
            label: 'Refusée',
            bg: 'bg-red-100',
            color: 'text-red-500',
            dot: 'bg-red-500',
        },
    }

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-indigo-100">
                        <Users className="w-5 h-5 text-mauve" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-base text-black">
                            Candidatures
                        </h2>
                        <p className="text-xs text-gray-600">
                            {candidatures.length} candidature{candidatures.length !== 1 ? 's' : ''} au total
                        </p>
                    </div>
                </div>

                {/* Stat pills */}
                <div className="flex gap-2">
                    {['pending', 'accepted', 'rejected'].map((s) => {
                        const count = candidatures.filter(c => c.status === s).length
                        const cfg = statusConfig[s]
                        return (
                            <span
                                key={s}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${cfg.bg} ${cfg.color}`}
                            >
                                {count} {cfg.label}
                            </span>
                        )
                    })}
                </div>
            </div>

            {/* Empty state */}
            {candidatures.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                    <FileText className="w-12 h-12 opacity-20 text-beigefoncer" strokeWidth="1.5" />
                    <p className="text-sm text-beigefoncer opacity-50">
                        Aucune candidature pour le moment
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-indigo-200 bg-beige">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-beigefoncer">
                                <Th>Candidat</Th>
                                <Th>Poste</Th>
                                <Th>Lettre de motivation</Th>
                                <Th>État</Th>
                                <Th>Actions</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidatures.map((c, i) => {
                                const cfg = statusConfig[c.status] || statusConfig.pending
                                const isExpanded = expandedLetter === c._id
                                const letter = c.motivationLetter || ''

                                return (
                                    <tr
                                        key={c._id}
                                        className={`transition-colors bg-beige hover:bg-beigefoncer ${i !== 0 ? 'border-t border-beigefoncer' : ''}`}
                                    >
                                        {/* Candidat */}
                                        <Td>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-indigo-100 text-mauve">
                                                    {(c.userId?.email?.[0] || '?').toUpperCase()}
                                                </div>
                                                <span className="font-medium text-bleufoncer">
                                                    {c.userId?.email || 'Email inconnu'}
                                                </span>
                                            </div>
                                        </Td>

                                        {/* Poste */}
                                        <Td>
                                            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-100 text-bleuclair">
                                                {c.jobId?.title || 'Poste supprimé'}
                                            </span>
                                        </Td>

                                        {/* Lettre */}
                                        <Td>
                                            <div className="max-w-xs">
                                                <p className="text-xs leading-relaxed text-bleufoncer opacity-75">
                                                    {isExpanded
                                                        ? letter
                                                        : letter.length > 80
                                                            ? letter.slice(0, 80) + '…'
                                                            : letter
                                                    }
                                                </p>
                                                {letter.length > 80 && (
                                                    <button
                                                        onClick={() => setExpandedLetter(isExpanded ? null : c._id)}
                                                        className="text-xs mt-1 font-medium hover:opacity-70 transition-opacity text-mauve"
                                                    >
                                                        {isExpanded ? 'Réduire ↑' : 'Voir tout ↓'}
                                                    </button>
                                                )}
                                            </div>
                                        </Td>

                                        {/* État */}
                                        <Td>
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                                                {cfg.label}
                                            </span>
                                        </Td>

                                        {/* Actions */}
                                        <Td>
                                            {c.status === 'pending' ? (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => onUpdateStatus(c._id, 'accepted')}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:brightness-95 active:scale-95 bg-green-100 text-green-700 border border-green-300"
                                                    >
                                                        <Check className="w-3.5 h-3.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        Accepter
                                                    </button>
                                                    <button
                                                        onClick={() => onUpdateStatus(c._id, 'rejected')}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:brightness-95 active:scale-95 bg-red-100 text-red-600 border border-red-300"
                                                    >
                                                        <X className="w-3.5 h-3.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        Refuser
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-xs italic text-bleufoncer opacity-35">
                                                    —
                                                </span>
                                            )}
                                        </Td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

/* ── micro helpers ── */
const Th = ({ children }) => (
    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bleufoncer opacity-50">
        {children}
    </th>
)

const Td = ({ children }) => (
    <td className="px-5 py-4 align-top">
        {children}
    </td>
)

export default CandidaturesSection