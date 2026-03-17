import apiClient from '../lib'

export const applyJob = async (jobId, motivationLetter, token) => {
    const response = await apiClient.post('/candidatures', { jobId, motivationLetter }, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export const getMyCandidatures = async (token) => {
    const response = await apiClient.get('/candidatures/me', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export const getAllCandidatures = async (token) => {
    const response = await apiClient.get('/candidatures', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export const updateCandidatureStatus = async (id, status, token) => {
    const response = await apiClient.put(`/candidatures/${id}/status`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default {
    applyJob,
    getMyCandidatures,
    getAllCandidatures,
    updateCandidatureStatus
}
