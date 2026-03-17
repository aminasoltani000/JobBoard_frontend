import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Briefcase, ChevronDown, LayoutGrid, FileText, LogOut, X, Menu } from 'lucide-react'
import logo from '../assets/pictures/logojob.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    const isAdmin = user?.role === 'admin'
    const isLoggedIn = !!token

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setProfileOpen(false)
        navigate('/login')
    }

    const isActive = (path) => location.pathname === path

    return (
        <nav className="fixed w-full z-20 top-0 border-b border-beigefoncer bg-beige">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2.5">
                    <img src={logo} alt="logo" className="h-[120px] w-auto" />
                </Link>

                <ul className="hidden md:flex items-center gap-1">
                    {[{ label: 'Accueil', path: '/' }, { label: 'Offres', path: '/jobs' }].map(({ label, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                    ${isActive(path) ? 'text-mauve bg-blue-100 opacity-100' : 'text-bleufoncer opacity-70 hover:bg-blue-50'}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    {!isLoggedIn ? (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-lg text-sm font-medium border border-beigefoncer bg-white text-bleufoncer transition-transform hover:-translate-y-0.5"
                            >
                                Connexion
                            </Link>
                            <Link
                                to="/register"
                                className="px-4 py-2 rounded-lg text-sm font-semibold bg-mauve text-white transition-transform hover:opacity-85 hover:-translate-y-0.5"
                            >
                                S'inscrire
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-xl border bg-white border-beigefoncer transition-colors hover:brightness-95"
                            >
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-blue-100 text-mauve">
                                    {user?.email?.[0]?.toUpperCase() || 'U'}
                                </div>
                                <span className="text-sm font-medium max-w-[120px] truncate text-bleufoncer">
                                    {user?.email?.split('@')[0] || 'Profil'}
                                </span>
                                <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''} text-bleufoncer opacity-40`}
                                    strokeWidth={2.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-beigefoncer shadow-xl overflow-hidden bg-white">
                                    <div className="px-4 py-3 border-b border-beigefoncer">
                                        <p className="text-xs font-semibold truncate text-bleufoncer">{user?.email}</p>
                                        <span
                                            className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs font-medium
                                                ${isAdmin ? 'bg-blue-100 text-mauve' : 'bg-green-100 text-green-600'}`}
                                        >
                                            <span className={`w-1 h-1 rounded-full ${isAdmin ? 'bg-mauve' : 'bg-green-500'}`} />
                                            {isAdmin ? 'Administrateur' : 'Candidat'}
                                        </span>
                                    </div>

                                    <div className="p-2 space-y-1">
                                        {isAdmin ? (
                                            <DropdownItem to="/dashboard" icon={<LayoutGrid className="w-4 h-4" />} label="Dashboard Admin" onClick={() => setProfileOpen(false)} />
                                        ) : (
                                            <DropdownItem to="/candidature" icon={<FileText className="w-4 h-4" />} label="Mes candidatures" onClick={() => setProfileOpen(false)} />
                                        )}

                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-600 transition-colors hover:brightness-95"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Se déconnecter
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <button
                    className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-beigefoncer text-bleufoncer transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen
                        ? <X className="w-5 h-5" />
                        : <Menu className="w-5 h-5" />
                    }
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-beigefoncer px-4 py-4 space-y-1 bg-beige">
                    {[{ label: 'Accueil', path: '/' }, { label: 'Offres', path: '/jobs' }].map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium
                                ${isActive(path) ? 'text-mauve bg-blue-100' : 'text-bleufoncer hover:bg-blue-50'}`}
                        >
                            {label}
                        </Link>
                    ))}

                    <div className="pt-2 border-t border-beigefoncer space-y-1">
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-2.5 rounded-xl text-sm font-medium border border-beigefoncer text-bleufoncer text-center">
                                    Connexion
                                </Link>
                                <Link to="/register" onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-mauve text-center">
                                    S'inscrire
                                </Link>
                            </>
                        ) : (
                            <>
                                {isAdmin
                                    ? <Link to="/dashboard" onClick={() => setMenuOpen(false)}
                                        className="block px-4 py-2.5 rounded-xl text-sm font-medium text-bleufoncer">
                                        Dashboard Admin
                                      </Link>
                                    : <Link to="/candidature" onClick={() => setMenuOpen(false)}
                                        className="block px-4 py-2.5 rounded-xl text-sm font-medium text-bleufoncer">
                                        Mes candidatures
                                      </Link>
                                }
                                <button onClick={handleLogout}
                                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 bg-red-100">
                                    Se déconnecter
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

const DropdownItem = ({ to, icon, label, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-bleufoncer transition-colors hover:bg-beigefoncer"
    >
        <span className="opacity-50">{icon}</span>
        {label}
    </Link>
)

export default Navbar