const jobTypeBadge = (type) => {
    const map = {
        'Full-time':  'bg-emerald-50 text-emerald-600 border border-emerald-200',
        'Part-time':  'bg-rose-50 text-rose-500 border border-rose-200',
        'Remote':     'bg-sky-50 text-sky-500 border border-sky-200',
        'Internship': 'bg-amber-50 text-amber-600 border border-amber-200',
    }
    return map[type] || 'bg-stone-100 text-stone-500 border border-stone-200'
}

const JobInfo = ({ job, onApply }) => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-stone-800 leading-tight mb-2">
                {job.title}
            </h1>
            <p className="text-stone-400 text-sm font-light mb-3">
                {job.company}
            </p>
            <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium tracking-wide ${jobTypeBadge(job.jobType)}`}>
                {job.jobType}
            </span>

            <div className="mt-6 h-px bg-stone-100" />

            <p className="text-stone-600 mt-6 leading-relaxed text-sm font-light">
                {job.description}
            </p>

            <button
                onClick={onApply}
                className="mt-8 w-full bg-stone-800 hover:bg-stone-900 text-white font-medium px-6 py-3.5 rounded-xl shadow-sm transition-colors duration-200 text-sm tracking-wide"
            >
                Postuler à cette offre
            </button>
        </>
    )
}

export default JobInfo
