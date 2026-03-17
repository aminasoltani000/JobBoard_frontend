import { Check, CircleCheckBig } from "lucide-react";

const ApplySuccessModal = ({ onClose }) => (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
    >
        <div className="bg-beige w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
            {/* Header vert */}
            <div
                className="px-8 py-6 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)' }}
            >
                <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                    <Check className="w-5 h-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </div>
                <div>
                    <h2 className="font-bold text-base" style={{ color: 'white' }}>Candidature envoyée !</h2>
                    <p className="text-xs" style={{ color: 'white', opacity: 0.7 }}>Bonne chance</p>
                </div>
            </div>

            <div className="px-8 py-6">
                <div className="flex justify-center mb-5">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}
                    >
                        <CircleCheckBig className="w-8 h-8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </div>
                </div>
                <p className="text-center text-sm mb-1 font-semibold" style={{ color: 'var(--color-bleufoncer)' }}>
                    Votre candidature a bien été transmise
                </p>
                <p className="text-center text-xs mb-6" style={{ color: 'var(--color-bleufoncer)', opacity: 0.5 }}>
                    Le recruteur reviendra vers vous prochainement
                </p>
                <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 bg-mauve text-white"
                >
                    Fermer
                </button>
            </div>
        </div>
    </div>
)

export default ApplySuccessModal