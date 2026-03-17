import { Link } from 'react-router-dom'
import { Briefcase, Mail, Lock, UserPlus } from 'lucide-react'

const RegisterForm = ({ email, password, loading, onEmailChange, onPasswordChange, onSubmit }) => {
    return (
        <div
            className="min-h-screen w-full flex items-center justify-center px-4 bg-jaune"
          
        >
          
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-mauve">
                        <Briefcase className="w-7 h-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </div>
                    <h1
                        className="text-4xl font-bold tracking-tight mb-1 text-bleufoncer"
                    >
                        Jobly
                    </h1>
                    <p className="text-sm" style={{ color: 'var(--color-bleufoncer)', opacity: 0.5 }}>
                        Votre carrière commence ici
                    </p>
                </div>
 
                <div
                    className="rounded-2xl p-8 border-beigefoncer bg-white b"
              
                >
              
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-bleufoncer">
                            Créer un compte
                        </h2>
                        <p className="text-xs mt-1 text-bleufoncer opacity-45" >
                            Rejoignez des milliers de candidats sur Jobly
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide mb-1.5 text-bleufoncer opacity-50">
                                <Mail className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                Adresse email
                            </label>
                            <input
                                type="email"
                                placeholder="exemple@email.com"
                                value={email}
                                onChange={onEmailChange}
                               className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border border-beigefoncer bg-white text-bleufoncer transition-all focus:border-mauve"
                                 required
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide mb-1.5 text-bleufoncer opacity-50"
                            >
                                <Lock className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={onPasswordChange}
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-all"
                                style={{
                                    borderColor: 'var(--color-beigefoncer)',
                                    backgroundColor: 'white',
                                    color: 'var(--color-bleufoncer)'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-mauve)'}
                                onBlur={e => e.target.style.borderColor = 'var(--color-beigefoncer)'}
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-85 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                            style={{ backgroundColor: 'var(--color-mauve)', color: 'white' }}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                                        style={{ borderColor: 'white', borderTopColor: 'transparent' }} />
                                    Inscription...
                                </>
                            ) : (
                                <>
                                    <UserPlus className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    S'inscrire
                                </>
                            )}
                        </button>


                        <div className="flex items-center gap-3 my-1">
                            <div className="flex-1 h-px bg-beige" />
                            <span className="text-xs text-bleufoncer opacity-35" >ou</span>
                            <div className="flex-1 h-px bg-beigefoncer" />
                        </div>
 
                        <p className="text-center text-xs text-bleufoncer opacity-55" >
                            Déjà un compte ?{' '}
                            <Link
                                to="/login"
                                className="font-bold hover:opacity-70 transition-opacity text-mauve"
                
                            >
                                Se connecter →
                            </Link>
                        </p>
                    </form>
                </div>

                <p className="text-center text-xs mt-6 text-bleufoncer opacity-35" >
                    En créant un compte, vous acceptez nos conditions d'utilisation
                </p>
            </div>
        </div>
    )
}

export default RegisterForm