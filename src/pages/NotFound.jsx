import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 ">
            <div className="text-center">

                <h1 className="text-9xl font-bold text-gray-200">404</h1>

                <h2 className="text-2xl font-semibold mt-4 mb-2">Page introuvable</h2>

                <p className="text-gray-500 mb-8">
                    La page que vous cherchez n'existe pas.
                </p>

                <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition">
                    Retour à l'accueil
                </Link>

            </div>
        </div>
    )
}

export default NotFound
