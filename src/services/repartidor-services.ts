import { apiClient } from "../config/axios-config"
import type { CreateCourierForm, EstadoRepartidor, Repartidor, UpdateCourierStatusForm } from "../types/repartidor-types"

export const getCouriers = async (estado?: EstadoRepartidor) => {
    return await apiClient.get<Repartidor[]>("api/v1/couriers", { 
        params: { 
            estado: estado
        } 
    })
}

export const getCourierById = async (id: string) => {
    return await apiClient.get<Repartidor>(`api/v1/couriers/${id}`)
}

export const createCourier = async (body: CreateCourierForm) => {
    return await apiClient.post<Repartidor>("api/v1/couriers", body)
}

export const updateCourierStatus = async (id: string, body: UpdateCourierStatusForm) => {
    return await apiClient.patch<Repartidor>(`api/v1/couriers/${id}/disponibilidad`, body)
}