import { apiClient } from "../config/axios-config"
import type { AssignCourierForm, CreateShipmentForm, EstadoEnvio, UpdateShipmentStatus } from "../types/envio-types"

export const createShipment = async (token: string, body: CreateShipmentForm) => {
    return await apiClient.post("api/v1/shipments", body, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getShipments = async (token: string, estado?: EstadoEnvio) => {
    return await apiClient.get("api/v1/shipments", { 
        headers: {
            "Authorization": `Bearer ${token}`
        },
        params: { 
            estado: estado
        } 
    })
}

export const getShipmentById = async (token: string, id: string) => {
    return await apiClient.get(`api/v1/shipments/${id}`, { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getShipmentByTrackingCode = async (token: string, codigo: string) => {
    return await apiClient.get(`api/v1/shipments/seguimiento/${codigo}`, { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const assignCourier = async (token: string, id: string, body: AssignCourierForm) => {
    return await apiClient.put(`api/v1/shipments/${id}/repartidor`, body, { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const updateShipmentStatus = async (token: string, id: string, body: UpdateShipmentStatus) => {
    return await apiClient.put(`api/v1/shipments/${id}/estado`, body, { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const cancelShipment = async (token: string, id: string) => {
    return await apiClient.put(`api/v1/shipments/${id}/cancelacion`, { 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getShipmentsMine = async (token: string, estado?: EstadoEnvio) => {
    return await apiClient.get("api/v1/shipments/mine", { 
        headers: {
            "Authorization": `Bearer ${token}`
        },
        params: { 
            estado: estado
        } 
    })
}

export const getShipmentsAssignedToMe = async (token: string, estado?: EstadoEnvio) => {
    return await apiClient.get("api/v1/shipments/assigned-to-me", { 
        headers: {
            "Authorization": `Bearer ${token}`
        },
        params: { 
            estado: estado
        } 
    })
}