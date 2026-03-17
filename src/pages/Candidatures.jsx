import { useState, useEffect } from 'react'
import { getMyCandidatures } from '../services/Candidaturesservices'
import CandidatureCard from '../components/CandidatureCard'
import ErrorMessage from '../components/ErrorMessage'

const MyApplications = () => {
    const [candidatures, setCandidatures] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchCandidatures = async () => {
            try {
                const token = localStorage.getItem('token')
                const data = await getMyCandidatures(token)
                setCandidatures(data)
            } catch (err) {
                setError('Erreur lors du chargement de vos candidatures.')
            } finally {
                setLoading(false)
            }
        }
        fetchCandidatures()
    }, [])

    if (loading) return <p className="text-center mt-20">Chargement...</p>

    return (
        <div className='bg-beige'>
        <div className=" max-w-3xl mx-auto px-6 py-12 pt-40 bg-beige">
            <h1 className="bg-beige text-3xl font-bold mb-8">Mes candidatures</h1>
            <ErrorMessage message={error} />

            {candidatures.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">Vous n'avez pas encore postulé.</p>
            ) : (
                <div className="space-y-4">
                    {candidatures.map((c) => (
                        <CandidatureCard key={c._id} candidature={c} />
                    ))}
                </div>
            )}
        </div>
        </div>
    )
}

export default MyApplications