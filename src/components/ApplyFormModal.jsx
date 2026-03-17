import { Send, X, AlertCircle, AlignLeft } from "lucide-react";

const ApplyFormModal = ({ letter, loading, error, onLetterChange, onSubmit, onClose }) => (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
    >
        <div
            className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: 'var(--color-beige)' }}
        >
            {/* Header */}
            <div
                className="px-8 py-6 flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, var(--color-bleufoncer) 0%, var(--color-bleuclair) 100%)' }}
            >
                <div className="flex items-center gap-3">
                    <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                        <Send className="w-5 h-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </div>
                    <div>
                        <h2 className="font-bold text-base" style={{ color: 'var(--color-beige)' }}>Postuler</h2>
                        <p className="text-xs" style={{ color: 'var(--color-beige)', opacity: 0.6 }}>
                            Rédigez votre lettre de motivation
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

            {/* Body */}
            <div className="px-8 py-6">
                {error && (
                    <div
                        className="flex items-center gap-2 px-4 py-3 rounded-xl mb-4 text-sm border"
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
                    <div>
                        <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide mb-1.5 ">
                            <AlignLeft className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            Lettre de motivation
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Expliquez pourquoi vous êtes le candidat idéal..."
                            value={letter}
                            onChange={onLetterChange}
                            className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-all resize-none border-beigefoncer bg-white text-bleufoncer"
                            onFocus={e => {
                                e.target.style.borderColor = 'var(--color-mauve)'
                                e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'
                            }}
                            onBlur={e => {
                                e.target.style.borderColor = 'var(--color-beigefoncer)'
                                e.target.style.boxShadow = 'none'
                            }}
                            required
                        />
                        <p className="text-right text-xs mt-1" style={{ color: 'var(--color-bleufoncer)', opacity: 0.35 }}>
                            {letter?.length || 0} caractères
                        </p>
                    </div>

                    <div className="flex gap-3 pt-1">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:brightness-95 disabled:opacity-50"
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
                            style={{ backgroundColor: 'var(--color-mauve)', color: 'white' }}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                                        style={{ borderColor: 'white', borderTopColor: 'transparent' }} />
                                    Envoi...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    Envoyer
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default ApplyFormModal