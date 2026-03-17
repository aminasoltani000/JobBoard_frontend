import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllJobs } from '../services/JobsServices'
import { applyJob } from '../services/Candidaturesservices'
import JobCard from '../components/JobCard'
import JobModal from '../components/Jobmodal'
import ApplyModal from '../components/ApplyModal'
import SearchBar from '../components/SearchBar'
import ErrorMessage from '../components/ErrorMessage'

const Jobs = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const [selectedJob, setSelectedJob] = useState(null)
    const [currentJobId, setCurrentJobId] = useState('')
    const [applyModalOpen, setApplyModalOpen] = useState(false)
    const [letter, setLetter] = useState('')
    const [applyLoading, setApplyLoading] = useState(false)
    const [applyError, setApplyError] = useState('')
    const [applySuccess, setApplySuccess] = useState(false)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await getAllJobs()
                setJobs(data)
            } catch (err) {
                setError('Erreur lors du chargement des offres.')
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    const handleViewDetails = (job) => {
        setSelectedJob(job)
    }

    const handleApplyClick = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
            return
        }
        setCurrentJobId(selectedJob._id)
        setSelectedJob(null)
        setApplyModalOpen(true)
    }

    const handleSubmitApply = async (e) => {
        e.preventDefault()
        setApplyError('')
        setApplyLoading(true)

        try {
            const token = localStorage.getItem('token')
            await applyJob(currentJobId, letter, token)
            setApplySuccess(true)
            setLetter('')
        } catch (err) {
            setApplyError(err.response?.data?.message || "Erreur lors de l'envoi.")
        } finally {
            setApplyLoading(false)
        }
    }

    const filteredJobs = jobs.filter((job) => {
        const search = searchTerm.toLowerCase()
        return (
            job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search)
        )
    })

    if (loading) return <p className="text-center mt-20">Chargement...</p>

    return (
        <div className=" py-12 px-5  pt-40"  style={{ background: "linear-gradient(160deg, #F5F3FF 0%, #EEF2FF 60%, #F8F7FF 100%)" }}>
            <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: '#22223B' }}>
                Offres d'emploi
            </h1>

            <ErrorMessage message={error} />

            <div className="max-w-xl mx-auto mb-8">
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredJobs.length === 0 ? (
                <p className="text-center py-10" style={{ color: '#9a8c98' }}>
                    Aucune offre ne correspond à votre recherche.
                </p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job._id}
                            job={job}
                            onViewDetails={handleViewDetails}
                        />
                    ))}
                </div>
            )}

            {selectedJob && (
                <JobModal
                    job={selectedJob}
                    onClose={() => setSelectedJob(null)}
                    onApply={handleApplyClick}
                />
            )}

            {applyModalOpen && (
                <ApplyModal
                    letter={letter}
                    loading={applyLoading}
                    error={applyError}
                    success={applySuccess}
                    onLetterChange={(e) => setLetter(e.target.value)}
                    onSubmit={handleSubmitApply}
                    onClose={() => { setApplyModalOpen(false); setApplySuccess(false) }}
                />
            )}
        </div>
    )
}

export default Jobs