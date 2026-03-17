import { Building2, X, Briefcase, Send } from 'lucide-react'

const jobTypeConfig = {
    CDI:      { label: 'CDI',      bg: 'rgba(99,102,241,0.12)',  color: 'var(--color-bleuclair)' },
    CDD:      { label: 'CDD',      bg: 'rgba(251,191,36,0.12)', color: '#b45309' },
    Stage:    { label: 'Stage',    bg: 'rgba(34,197,94,0.12)',  color: '#15803d' },
    Freelance:{ label: 'Freelance',bg: 'rgba(239,68,68,0.12)',  color: '#dc2626' },
}
//afficher details job
const JobModal = ({ job, onClose, onApply }) => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    const isAdmin = user?.role === 'admin'
    const typeCfg = jobTypeConfig[job.jobType] || {
        label: job.jobType,
        bg: 'rgba(99,102,241,0.1)',
        color: 'var(--color-bleuclair)'
    }

    return (
       
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >

            <div
                className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-beige"
                style={{
                
                    maxHeight: '90vh',
                }}
            >
      
                <div
                    className="px-8 pt-8 pb-6"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-bleufoncer) 0%, var(--color-bleuclair) 100%)',
                    }}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                   
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 text-beige"
                                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                            >
                                {job.title?.[0]?.toUpperCase() || '?'}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold leading-tight text-beige">
                                    {job.title}
                                </h2>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <Building2 className="w-3.5 h-3.5 opacity-60" stroke="var(--color-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <p className="text-sm text-beige opacity-75">
                                        {job.company}
                                    </p>
                                </div>
                            </div>
                        </div>

      
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
                            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-beige)' }}
                        >
                            <X className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </button>
                    </div>

       
                    <div className="mt-4">
                        <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-beige bg-white/15"

                        >
                            {typeCfg.label}
                        </span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-6">

       
                    <div className="flex flex-wrap gap-3 mb-6">
                        <InfoPill icon={
                            <Briefcase className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        } label={job.jobType} color={typeCfg.color} bg={typeCfg.bg} />

                        <InfoPill icon={
                            <Building2 className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        } label={job.company} color="var(--color-bleuclair)" bg="rgba(63,76,154,0.1)" />
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider shrink-0"
                            style={{ color: 'var(--color-bleufoncer)', opacity: 0.4 }}>
                            Description du poste
                        </p>
                        <div className="flex-1 h-px bg-beigefoncer"  />
                    </div>

                    <p className="text-sm leading-relaxed text-bleufoncer opacity-80">
                        {job.description}
                    </p>
                </div>


                <div
                    className="px-8 py-5 flex gap-3 border-t border-beigefoncer"
               
                >
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border border-beigefoncer text-bleufoncer bg-transparent transition-colors hover:brightness-95"
                      
                    >
                        Fermer
                    </button>

                    {!isAdmin && (
                        <button
                            onClick={onApply}
                            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 active:scale-95 flex items-center justify-center gap-2"
                            style={{ backgroundColor: 'var(--color-mauve)', color: 'var(--color-beige)' }}
                        >
                            <Send className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            Postuler
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}


const InfoPill = ({ icon, label, color, bg }) => (
    <span
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
      
    >
        {icon}
        {label}
    </span>
)

export default JobModal