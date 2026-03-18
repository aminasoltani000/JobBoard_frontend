import apiClient from '../lib'

const data = await getAllJobs()
setJobs(Array.isArray(data) ? data : data.jobs || [])

export const getJobById = async (id) => {
    const response = await apiClient.get(`/jobs/${id}`)
    return response.data
}

export const createJob = async (jobData, token) => {
    const response = await apiClient.post('/jobs', jobData, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export const updateJob = async (id, jobData, token) => {
    const response = await apiClient.put(`/jobs/${id}`, jobData, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export const deleteJob = async (id, token) => {
    const response = await apiClient.delete(`/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
}
