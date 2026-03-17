import { Building2, ArrowRight } from 'lucide-react'

const jobTypeBadge = (type) => {
    const map = {
        'Full-time':  'bg-emerald-50 text-emerald-600 border border-emerald-200',
        'Part-time':  'bg-rose-50 text-rose-500 border border-rose-200',
        'Remote':     'bg-sky-50 text-sky-500 border border-sky-200',
        'Internship': 'bg-amber-50 text-amber-600 border border-amber-200',
    }
    return map[type] || 'bg-stone-100 text-stone-500 border border-stone-200'
}

const JobCard = ({ job, onViewDetails }) => {
    return (
        <div
            className="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col bg-white border-beigefoncer"

        >
         
            <div className="flex items-start gap-4 mb-4">
           
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-bold shrink-0  text-mauve bg-[rgba(99,102,241,0.1)]"
                
                >
                    {(job.title?.[0] || '?').toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                    <h2
                        className="font-semibold text-base leading-snug truncate text-bleufoncer"
               
                    >
                        {job.title}
                    </h2>
                    <div className="flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3 opacity-40" stroke="var(--color-bleufoncer)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <p className="text-xs font-light text-bleufoncer opacity-50">
                            {job.company}
                        </p>
                    </div>
                </div>
            </div>

          
            <span className={`inline-block self-start text-xs px-3 py-1 rounded-full font-medium tracking-wide ${jobTypeBadge(job.jobType)}`}>
                {job.jobType}
            </span>

   
            <p
                className="text-sm mt-4 leading-relaxed line-clamp-2 flex-1 text-bleufoncer opacity-55"

            >
                {job.description}
            </p>

            <div className="mt-5 mb-4 h-px bg-beigefoncer" />

           <button
    onClick={() => onViewDetails(job)}
    className="
        w-full flex items-center justify-between
        text-sm font-semibold px-4 py-2.5 rounded-xl
        border transition-all duration-200
        border-beige foncer
        text-bleufoncer
        bg-transparent
        hover:bg-mauve
        hover:border-mauve
        hover:text-white
    "
>
    <span>Voir détails</span>
    <ArrowRight
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</button>
        </div>
    )
}

export default JobCard