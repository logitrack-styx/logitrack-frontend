import { apiClient } from "../config/axios-config"
import type { CreateCourierForm, UpdateCourierStatusForm } from "../types/repartidor-types"

export const getCouriers = async (token: string) => {
    return await apiClient.get("api/v1/couriers", { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getCourierById = async (token: string, id: string) => {
    return await apiClient.get(`api/v1/couriers/${id}`, { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const createCourier = async (token: string, body: CreateCourierForm) => {
    return await apiClient.post("api/v1/couriers", body, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const updateCourierStatus = async (token: string, id: string, body: UpdateCourierStatusForm) => {
    return await apiClient.patch(`api/v1/couriers/${id}/disponibilidad`, body, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}