import { Link } from 'react-router-dom'
import { Briefcase, Mail, Lock, LogIn } from 'lucide-react'

const LoginForm = ({ email, password, loading, onEmailChange, onPasswordChange, onSubmit }) => {
    return (
        <div
            className="bg-jaune min-h-screen w-full flex items-center justify-center px-4"
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
                    <p className="text-sm text-bleufoncer opacity-50">
                        Votre carrière commence ici
                    </p>
                </div>

      
                <div
                    className="rounded-2xl p-8 border bg-white border-beigefoncer"
            
                >
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-bleufoncer" >
                            Connexion
                        </h2>
                        <p className="text-xs mt-1 text-bleufoncer opacity-45" >
                            Bienvenue de retour sur Jobly
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">

      
                        <div>
                            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide mb-1.5 text-bleufoncer opacity-55"
               >
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
                                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border border-beigefoncer bg-white text-bleufoncer transition-all focus:border-mauve"
                                required
                            />
                        </div>

               
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-85 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2 text-white bg-mauve"
                        
                        >
                            {loading ? (
                                <>
                                    <div 
                            className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                    Connexion...
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    Se connecter
                                </>
                            )}
                        </button>

                     <div className="flex items-center gap-3 my-1">
                       <div className="flex-1 h-px bg-beigefoncer" />
                       <span className="text-xs text-bleufoncer/35">ou</span>
                       <div className="flex-1 h-px bg-beigefoncer" />
                    </div>

                        <p className="text-center text-xs text-bleufoncer opacity-50" >
                            Pas encore de compte ?{' '}
                            <Link
                                to="/register"
                                className="font-bold hover:opacity-70 transition-opacity text-mauve"
                         
                            >
                                S'inscrire →
                            </Link>
                        </p>
                    </form>
                </div>

                <p className="text-center text-xs mt-6 text-bleufoncer opacity-35">
                    En vous connectant, vous acceptez nos conditions d'utilisation
                </p>
            </div>
        </div>
    )
}

export default LoginForm