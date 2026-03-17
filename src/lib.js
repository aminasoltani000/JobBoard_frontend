
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: import.meta.env.BACKEND_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Allow-Control-Allow-Origin': '*',
    }
})

export default apiClient;
