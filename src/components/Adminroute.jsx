    import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    
    // Si pas d'utilisateur connecté → redirection vers login
    if (!user) {
        return <Navigate to="/login" replace />
    }
    
    // Si connecté mais pas admin → message d'erreur
    if (user.role !== 'admin') {
        return (
            <div className="  bg-beige min-h-screen flex items-center justify-center">
                <div className=" text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Accès refusé</h1>
                    <p className="text-gray-600">Vous n'avez pas les permissions nécessaires.</p>
                </div>
            </div>
        )
    }
    
    // Si admin → affiche la page
    return children
}

export default AdminRoute