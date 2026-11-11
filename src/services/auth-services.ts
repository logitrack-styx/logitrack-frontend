import { apiClient } from "../config/axios-config"
import type { LoginForm, RegisterForm } from "../types/auth-types"

export const loginMethod = async (body: LoginForm) => {
    return await apiClient.post("api/v1/auth/login", body)
}

export const registerMethod = async (body: RegisterForm) => {
    return await apiClient.post("api/v1/auth/register", body)
}