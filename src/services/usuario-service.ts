import { apiClient } from "../config/axios-config"
import type { CreateUserForm } from "../types/usuario-types"

export const getCurrentUser = async (token: string) => {
    return await apiClient.get("api/v1/users/me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const createUser = async (token: string, body: CreateUserForm) => {
    return await apiClient.post("api/v1/users", body, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getUser = async (token: string, id: string) => {
    return await apiClient.get(`api/v1/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}