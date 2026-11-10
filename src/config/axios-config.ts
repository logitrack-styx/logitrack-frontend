import axios from 'axios'

export const apiClient = axios.create({
    timeout: 30000,
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    }
})