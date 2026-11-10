import { apiClient } from "../config/axios-config"

export const loginMethod = async (username: string, password: string) => {
    return await apiClient.post("api/v1/auth/login", { username, password })
}

export const registerMethod = async (username: string, email: string, password: string) => {
    return await apiClient.post("api/v1/auth/register", { username, email, password })
}