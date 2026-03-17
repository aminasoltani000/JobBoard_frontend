import apiClient from '../lib'

export const getDashboardStats = async (token) => {
    const response = await apiClient.get('/admin/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default {
    getDashboardStats
}
