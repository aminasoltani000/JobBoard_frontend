import { Briefcase, Users, Clock, CheckCircle, XCircle } from 'lucide-react'

const StatsSection = ({ stats }) => {
    const cards = [
        {
            label: 'Total Jobs',
            value: stats.totalJobs,
            icon: <Briefcase className="w-5 h-5" />,
            accent: 'text-indigo-500',
            bg: 'bg-indigo-100',
            bar: 'bg-indigo-500',
        },
        {
            label: 'Total Candidatures',
            value: stats.totalCandidatures,
            icon: <Users className="w-5 h-5" />,
            accent: 'text-blue-500',
            bg: 'bg-blue-100',
            bar: 'bg-blue-500',
        },
        {
            label: 'En attente',
            value: stats.pendingCandidatures,
            icon: <Clock className="w-5 h-5" />,
            accent: 'text-amber-600',
            bg: 'bg-amber-100',
            bar: 'bg-amber-500',
        },
        {
            label: 'Acceptées',
            value: stats.acceptedCandidatures,
            icon: <CheckCircle className="w-5 h-5" />,
            accent: 'text-green-600',
            bg: 'bg-green-100',
            bar: 'bg-green-500',
        },
        {
            label: 'Refusées',
            value: stats.rejectedCandidatures,
            icon: <XCircle className="w-5 h-5" />,
            accent: 'text-red-500',
            bg: 'bg-red-100',
            bar: 'bg-red-500',
        },
    ]

    return (
        <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-5">
                {cards.map((card) => (
                    <div
                        key={card.label}
                        className="rounded-2xl p-5 flex flex-col gap-3 border border-beigefoncer bg-beige transition-transform hover:-translate-y-0.5"
                    >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.bg} ${card.accent}`}>
                            {card.icon}
                        </div>

                        <p className="text-3xl font-bold tracking-tight text-bleufoncer ">
                            {card.value ?? '—'}
                        </p>

                        <div>
                            <p className="text-xs font-medium text-bleufonceropacity-55">
                                {card.label}
                            </p>
                            <div className={`mt-2 h-0.5 rounded-full w-8 opacity-50 ${card.bar}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatsSection