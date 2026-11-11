import { apiClient } from "../config/axios-config"
import { type Asignacion, type AssignCourierForm, type CreateShipmentForm, type Envio, type EstadoEnvio, type UpdateShipmentStatus } from "../types/envio-types"

export const createShipment = async (body: CreateShipmentForm) => {
    return await apiClient.post<Envio>("api/v1/shipments", body)
}

export const getShipments = async (estado?: EstadoEnvio) => {
    return await apiClient.get<Envio[]>("api/v1/shipments", { 
        params: { 
            estado: estado
        } 
    })
}

export const getShipmentById = async (id: string) => {
    return await apiClient.get<Envio>(`api/v1/shipments/${id}`)
}

export const getShipmentByTrackingCode = async (codigo: string) => {
    return await apiClient.get<Envio>(`api/v1/shipments/seguimiento/${codigo}`)
}

export const assignCourier = async (id: string, body: AssignCourierForm) => {
    return await apiClient.put<Asignacion>(`api/v1/shipments/${id}/repartidor`, body)
}

export const updateShipmentStatus = async (id: string, body: UpdateShipmentStatus) => {
    return await apiClient.patch<Envio>(`api/v1/shipments/${id}/estado`, body)
}

export const cancelShipment = async (id: string) => {
    return await apiClient.patch(`api/v1/shipments/${id}/cancelacion`)
}

export const getShipmentsMine = async (estado?: EstadoEnvio) => {
    return await apiClient.get<Envio[]>("api/v1/shipments/mine", { 
        params: { 
            estado: estado
        } 
    })
}

export const getShipmentsAssignedToMe = async (estado?: EstadoEnvio) => {
    return await apiClient.get<Envio[]>("api/v1/shipments/assigned-to-me", { 
        params: { 
            estado: estado
        } 
    })
}