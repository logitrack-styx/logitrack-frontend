import axios from 'axios'
import { useAppContext } from '../hooks/useAppContext'

export const apiClient = axios.create({
    timeout: 30000,
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const PUBLIC_ROUTES = ['/api/v1/auth/login', '/api/v1/auth/register']
const isPublicRoute = (url?: string) => PUBLIC_ROUTES.some((r) => url?.includes(r))

apiClient.interceptors.request.use((config) => {
    const token = useAppContext.getState().token
    
    if (token && !isPublicRoute(config.url)) {
        config.headers.Authorization = `Bearer ${token}`
    } else {
        delete config.headers.Authorization
    }

    return config
})

apiClient.interceptors.response.use(
    (res) => res,
    (error) => {
        const status = error.response?.status
        if ((status === 401 || status === 403) && !isPublicRoute) {
            useAppContext.getState().logout()
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)