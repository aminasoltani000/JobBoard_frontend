import { Pencil, Plus, X, AlertCircle, Briefcase, Building2, FileText, AlignLeft, Save } from 'lucide-react'

const JobFormModal = ({ job, onClose, onSubmit, loading, error }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: 'var(--color-beige)' }}
            >
                {/* ── Header ── */}
                <div
                    className="px-8 py-6 flex items-center justify-between"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-bleufoncer) 0%, var(--color-bleuclair) 100%)',
                    }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                        >
                            {job ? (
                                <Pencil className="w-5 h-5" stroke="var(--color-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            ) : (
                                <Plus className="w-5 h-5" stroke="var(--color-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            )}
                        </div>
                        <div>
                            <h2 className="font-bold text-base" style={{ color: 'var(--color-beige)' }}>
                                {job ? 'Modifier le job' : 'Ajouter un job'}
                            </h2>
                            <p className="text-xs" style={{ color: 'var(--color-beige)', opacity: 0.6 }}>
                                {job ? `Édition de "${job.title}"` : 'Remplissez les informations ci-dessous'}
                            </p>
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

                {/* ── Body ── */}
                <div className="px-8 py-6">
                    {/* Error banner */}
                    {error && (
                        <div
                            className="flex items-center gap-2 px-4 py-3 rounded-xl mb-5 text-sm border"
                            style={{
                                backgroundColor: 'rgba(239,68,68,0.08)',
                                borderColor: 'rgba(239,68,68,0.25)',
                                color: '#dc2626'
                            }}
                        >
                            <AlertCircle className="w-4 h-4 shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={onSubmit} className="space-y-4">

                        {/* Titre */}
                        <Field label="Titre du poste" icon={
                            <Briefcase className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        }>
                            <input
                                type="text"
                                name="title"
                                defaultValue={job?.title}
                                placeholder="ex: Développeur Full Stack"
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors focus:border-indigo-400"
                                style={{
                                    borderColor: 'var(--color-beigefoncer)',
                                    backgroundColor: 'white',
                                    color: 'var(--color-bleufoncer)'
                                }}
                                required
                            />
                        </Field>

                        {/* Entreprise */}
                        <Field label="Entreprise" icon={
                            <Building2 className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        }>
                            <input
                                type="text"
                                name="company"
                                defaultValue={job?.company}
                                placeholder="ex: Google"
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors focus:border-indigo-400"
                                style={{
                                    borderColor: 'var(--color-beigefoncer)',
                                    backgroundColor: 'white',
                                    color: 'var(--color-bleufoncer)'
                                }}
                                required
                            />
                        </Field>

                        {/* Type de contrat */}
                        <Field label="Type de contrat" icon={
                            <FileText className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        }>
                            <select
                                name="jobType"
                                defaultValue={job?.jobType || 'Full-time'}
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors focus:border-indigo-400 appearance-none cursor-pointer"
                                style={{
                                    borderColor: 'var(--color-beigefoncer)',
                                    backgroundColor: 'white',
                                    color: 'var(--color-bleufoncer)'
                                }}
                            >
                                <option value="Full-time">Temps plein</option>
                                <option value="Part-time">Temps partiel</option>
                                <option value="Internship">Stage</option>
                                <option value="Remote">Télétravail</option>
                            </select>
                        </Field>

                        {/* Description */}
                        <Field label="Description" icon={
                            <AlignLeft className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        }>
                            <textarea
                                name="description"
                                defaultValue={job?.description}
                                rows={4}
                                placeholder="Décrivez le poste, les missions, les compétences requises..."
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors focus:border-indigo-400 resize-none"
                                style={{
                                    borderColor: 'var(--color-beigefoncer)',
                                    backgroundColor: 'white',
                                    color: 'var(--color-bleufoncer)'
                                }}
                                required
                            />
                        </Field>

                        {/* ── Footer buttons ── */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:brightness-95"
                                style={{
                                    borderColor: 'var(--color-beigefoncer)',
                                    color: 'var(--color-bleufoncer)',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ backgroundColor: 'var(--color-mauve)', color: 'var(--color-beige)' }}
                            >
                                {loading ? (
                                    <>
                                        <div
                                            className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                                            style={{ borderColor: 'var(--color-beige)', borderTopColor: 'transparent' }}
                                        />
                                        Enregistrement...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        Enregistrer
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

/* ── micro helper ── */
const Field = ({ label, icon, children }) => (
    <div>
        <label className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: 'var(--color-bleufoncer)', opacity: 0.5 }}>
            {icon}
            {label}
        </label>
        {children}
    </div>
)

export default JobFormModal
