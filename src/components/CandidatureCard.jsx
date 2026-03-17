import { Building2 } from "lucide-react";

const statusConfig = {
    pending:  { label: 'En attente', bg: 'rgba(251,191,36,0.12)',  color: '#d97706', dot: '#f59e0b' },
    accepted: { label: 'Acceptée',   bg: 'rgba(34,197,94,0.12)',   color: '#16a34a', dot: '#22c55e' },
    rejected: { label: 'Refusée',    bg: 'rgba(239,68,68,0.12)',   color: '#dc2626', dot: '#ef4444' },
}

const CandidatureCard = ({ candidature }) => {
    const cfg = statusConfig[candidature.status] || statusConfig.pending

    return (
        <div
            className="rounded-2xl p-5 border transition-all hover:-translate-y-0.5 hover:shadow-md "style={{ background: "linear-gradient(160deg, #F5F3FF 0%, #EEF2FF 60%, #F8F7FF 100%)" }} 
        >
            {/* ── Top row ── */}
            <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 min-w-0">
                    {/* Avatar lettre */}
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                        style={{
                            backgroundColor: 'rgba(99,102,241,0.1)',
                            color: 'var(--color-mauve)'
                        }}
                    >
                        {(candidature.jobId?.title?.[0] || '?').toUpperCase()}
                    </div>

                    <div className="min-w-0">
                        <h2 className="font-semibold text-sm truncate" style={{ color: 'var(--color-bleufoncer)' }}>
                            {candidature.jobId?.title || 'Poste supprimé'}
                        </h2>
                        <div className="flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3 h-3 opacity-40" stroke="var(--color-bleufoncer)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <p className="text-xs" style={{ color: 'var(--color-bleufoncer)', opacity: 0.5 }}>
                                {candidature.jobId?.company || '—'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Badge statut */}
                <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0"
                    style={{ backgroundColor: cfg.bg, color: cfg.color }}
                >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.dot }} />
                    {cfg.label}
                </span>
            </div>

            {/* Divider */}
            <div className="h-px mb-3" style={{ backgroundColor: 'var(--color-beigefoncer)' }} />

            {/* Lettre de motivation */}
            <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-bleufoncer)', opacity: 0.6 }}>
                {candidature.motivationLetter}
            </p>
        </div>
    )
}

export default CandidatureCard