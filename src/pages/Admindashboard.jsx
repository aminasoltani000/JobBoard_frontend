import { useState, useEffect } from 'react'
import { getDashboardStats } from '../services/adminservices'
import { getAllJobs, createJob, updateJob, deleteJob } from '../services/jobsServices'
import { getAllCandidatures, updateCandidatureStatus } from '../services/Candidaturesservices'
import StatsSection from '../components/Statssection'
import JobsSection from '../components/Jobssection'
import JobFormModal from '../components/Jobformmodal'
import CandidaturesSection from '../components/Candidaturessection'
import ErrorMessage from '../components/ErrorMessage'
import DeleteConfirmModal from '../components/Deleteconfirmmodel'
const AdminDashboard = () => {
    const [stats, setStats] = useState(null)
    const [jobs, setJobs] = useState([])
    const [candidatures, setCandidatures] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [modalOpen, setModalOpen] = useState(false)
    const [editingJob, setEditingJob] = useState(null)
    const [modalLoading, setModalLoading] = useState(false)
    const [modalError, setModalError] = useState('')

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [deletingJob, setDeletingJob] = useState(null)
    const [deleteLoading, setDeleteLoading] = useState(false)

    const token = localStorage.getItem('token')

    const fetchAll = async () => {
        setLoading(true)
        try {
            const [statsData, jobsData, candidaturesData] = await Promise.all([
                getDashboardStats(token),
                getAllJobs(),
                getAllCandidatures(token)
            ])
            setStats(statsData)
            setJobs(jobsData)
            setCandidatures(candidaturesData)
        } catch (err) {
            setError('Erreur lors du chargement du dashboard.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAll()
    }, [])

    const handleAddJob = () => {
        setEditingJob(null)
        setModalError('')
        setModalOpen(true)
    }

    const handleEditJob = (job) => {
        setEditingJob(job)
        setModalError('')
        setModalOpen(true)
    }

    const handleSubmitJob = async (e) => {
        e.preventDefault()
        setModalError('')
        setModalLoading(true)

        const formData = {
            title: e.target.title.value,
            company: e.target.company.value,
            jobType: e.target.jobType.value,
            description: e.target.description.value,
        }

        try {
            if (editingJob) {
                await updateJob(editingJob._id, formData, token)
            } else {
                await createJob(formData, token)
            }
            setModalOpen(false)
            await fetchAll()
        } catch (err) {
            setModalError(err.response?.data?.message || 'Erreur lors de l\'enregistrement.')
        } finally {
            setModalLoading(false)
        }
    }

 const handleDeleteJob = (id) => {
    const job = jobs.find(j => j._id === id)
    setDeletingJob(job)
    setDeleteModalOpen(true)
}

const handleConfirmDelete = async () => {
    setDeleteLoading(true)
    try {
        await deleteJob(deletingJob._id, token)
        setDeleteModalOpen(false)
        await fetchAll()
    } catch (err) {
        setError('Erreur lors de la suppression.')
    } finally {
        setDeleteLoading(false)
    }
}

    const handleUpdateStatus = async (id, status) => {
        try {
            await updateCandidatureStatus(id, status, token)
            await fetchAll()
        } catch (err) {
            setError('Erreur lors de la mise à jour du statut.')
        }
    }

    if (loading) return <p className="text-center mt-20">Chargement...</p>

    return (
        <div className="min-h-screen px-6 py-12 bg-jaune">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-black" >
                    Dashboard Admin
                </h1>

                <ErrorMessage message={error} />

                {stats && <StatsSection stats={stats} />}

                <JobsSection
                    jobs={jobs}
                    onAdd={handleAddJob}
                    onEdit={handleEditJob}
                    onDelete={handleDeleteJob}
                />

                <CandidaturesSection
                    candidatures={candidatures}
                    onUpdateStatus={handleUpdateStatus}
                />

                {modalOpen && (
                    <JobFormModal
                        job={editingJob}
                        onClose={() => setModalOpen(false)}
                        onSubmit={handleSubmitJob}
                        loading={modalLoading}
                        error={modalError}
                    />
                )}
                {deleteModalOpen && (
                   <DeleteConfirmModal
                         job={deletingJob}
                         onClose={() => setDeleteModalOpen(false)}
                         onConfirm={handleConfirmDelete}
                         loading={deleteLoading}
                        />
)}
            </div>
        </div>
    )
}

export default AdminDashboard