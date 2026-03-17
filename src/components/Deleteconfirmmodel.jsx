import { Trash2, X, AlertTriangle, AlertCircle } from 'lucide-react'

const DeleteConfirmModal = ({ job, onClose, onConfirm, loading }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-beige">

                {/* ── Header rouge ── */}
                <div className="px-8 py-6 flex items-center justify-between bg-gradient-to-br from-red-900 to-red-600">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/15">
                            <Trash2 className="w-5 h-5 text-beige" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </div>
                        <div>
                            <h2 className="font-bold text-base text-beige">
                                Supprimer le job
                            </h2>
                            <p className="text-xs text-beige opacity-60">
                                Cette action est irréversible
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70 bg-white/15 text-beige"
                    >
                        <X className="w-4 h-4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </button>
                </div>

                {/* ── Body ── */}
                <div className="px-8 py-6">

                    {/* Warning icon */}
                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-red-100">
                            <AlertTriangle className="w-8 h-8 text-red-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </div>
                    </div>

                    {/* Message */}
                    <p className="text-center text-sm mb-2 text-bleufoncer opacity-65">
                        Vous êtes sur le point de supprimer
                    </p>
                    <p className="text-center font-bold text-lg mb-1 text-bleufoncer">
                        "{job?.title}"
                    </p>
                    {job?.company && (
                        <p className="text-center text-sm mb-6 text-bleufoncer opacity-50">
                            {job.company}
                        </p>
                    )}

                    {/* Info box */}
                    <div className="rounded-xl px-4 py-3 mb-6 flex items-start gap-2.5 border bg-red-50 border-red-200">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <p className="text-xs leading-relaxed text-red-600">
                            Toutes les candidatures associées à ce poste seront également supprimées. Cette action ne peut pas être annulée.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border border-beigefoncer text-bleufoncer bg-transparent transition-colors hover:brightness-95 disabled:opacity-50"
                        >
                            Annuler
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            disabled={loading}
                            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-red-600 text-white transition-opacity hover:opacity-85 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                    Suppression...
                                </>
                            ) : (
                                <>
                                    <Trash2 className="w-4 h-4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    Supprimer définitivement
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmModal