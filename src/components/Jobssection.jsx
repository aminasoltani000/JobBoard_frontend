import { Briefcase, Plus, Building2, Pencil, Trash2 } from 'lucide-react'

const jobTypeConfig = {
  CDI: { label: 'CDI', bg: 'rgba(99,102,241,0.12)', color: 'var(--color-bleuclair)' },
  CDD: { label: 'CDD', bg: 'rgba(251,191,36,0.12)', color: '#b45309' },
  Stage: { label: 'Stage', bg: 'rgba(34,197,94,0.12)', color: '#15803d' },
  Freelance: { label: 'Freelance', bg: 'rgba(239,68,68,0.12)', color: '#dc2626' },
}

const JobsSection = ({ jobs, onAdd, onEdit, onDelete }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[rgba(99,102,241,0.15)]">
            <Briefcase className="w-5 h-5 text-mauve" />
          </div>
          <div>
            <h2 className="font-semibold text-base text-black">Offres d'emploi</h2>
            <p className="text-xs text-gray-600">{jobs.length} offre {jobs.length !== 1 ? 's' : ''} au total</p>
          </div>
        </div>

        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80 active:scale-95 bg-mauve text-beige"
        >
          <Plus className="w-4 h-4" />
          Ajouter un job
        </button>
      </div>

      {jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <Briefcase className="w-12 h-12 opacity-20 text-beige" />
          <p className="text-sm text-beigefoncer opacity-50">Aucune offre pour le moment</p>
          <button
            onClick={onAdd}
            className="text-sm px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-80 bg-mauve text-beige"
          >
            Créer la première offre
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[rgba(99,102,241,0.2)] bg-beige">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-beigefoncer">
                <Th>Titre du poste</Th>
                <Th>Entreprise</Th>
                <Th>Type de contrat</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => {
                const typeCfg = jobTypeConfig[job.jobType] || {
                  label: job.jobType,
                  bg: 'rgba(99,102,241,0.1)',
                  color: 'var(--color-bleuclair)',
                }

                return (
                  <tr
                    key={job._id}
                    className={`transition-colors ${i !== 0 ? 'border-t border-beigefoncer' : ''} hover:bg-beigefoncer`}
                  >
                    <Td>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-[rgba(99,102,241,0.15)] text-mauve">
                          {(job.title?.[0] || '?').toUpperCase()}
                        </div>
                        <span className="font-semibold text-bleufoncer">{job.title}</span>
                      </div>
                    </Td>

                    <Td>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 opacity-40 shrink-0 text-bleufoncer" />
                        <span className="text-bleufoncer opacity-80">{job.company}</span>
                      </div>
                    </Td>

                    <Td>
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: typeCfg.bg, color: typeCfg.color }}
                      >
                        {typeCfg.label}
                      </span>
                    </Td>

                    <Td>
                      <p className="text-xs leading-relaxed max-w-xs line-clamp-2 text-bleufoncer opacity-60">
                        {job.description || <span className="italic opacity-40">—</span>}
                      </p>
                    </Td>

                    <Td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => onEdit(job)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:brightness-95 active:scale-95 bg-[rgba(99,102,241,0.12)] text-bleuclair border border-[rgba(99,102,241,0.25)]"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          Modifier
                        </button>
                        <button
                          onClick={() => onDelete(job._id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:brightness-95 active:scale-95 bg-[rgba(239,68,68,0.12)] text-red-600 border border-[rgba(239,68,68,0.25)]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Supprimer
                        </button>
                      </div>
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

const Th = ({ children }) => (
  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bleufoncer opacity-50">
    {children}
  </th>
)

const Td = ({ children }) => (
  <td className="px-5 py-4 align-middle">{children}</td>
)

export default JobsSection