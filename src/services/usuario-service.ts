import { apiClient } from "../config/axios-config"
import type { CreateUserForm, Usuario } from "../types/usuario-types"

export const getCurrentUser = async () => {
    return await apiClient.get<Usuario>("api/v1/users/me")
}

export const createUser = async (body: CreateUserForm) => {
    return await apiClient.post<Usuario>("api/v1/users", body)
}

export const getUser = async (id: string) => {
    return await apiClient.get<Usuario>(`api/v1/users/${id}`)
}