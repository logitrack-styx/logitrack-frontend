import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { AssignCourierForm, CreateShipmentForm, EstadoEnvio, UpdateShipmentStatus } from "../types/envio-types"
import { assignCourier, cancelShipment, createShipment, getShipmentById, getShipmentByTrackingCode, getShipments, getShipmentsAssignedToMe, getShipmentsMine, updateShipmentStatus } from "../services/envio-service"
import { toast } from "../components/ui/toast"
import { useNavigate } from "react-router"
import { queryKeys } from "../config/query-keys"

export const useCrearEnvio = () => {
    const qc = useQueryClient()
    const navigate = useNavigate()
    
    return useMutation({
        mutationFn: async (body: CreateShipmentForm) => (await createShipment(body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.envios.all })
            toast.add({ type: "success", description: "Envio creado correctamente" })
            navigate("/envios")
        }
    })
}

export const useEnvios = (estado?: EstadoEnvio) => {
    return useQuery({
        queryKey: queryKeys.envios.list(estado),
        queryFn: async () => (await getShipments(estado)).data,
        placeholderData: keepPreviousData,
    })
}

export const useEnvioById = (id: string) => {
    return useQuery({
        queryKey: queryKeys.envios.detail(id),
        queryFn: async () => (await getShipmentById(id)).data,
        enabled: !!id,
    })
}

export const useEnvioByCodigo = (codigo: string) => {
    return useQuery({
        queryKey: queryKeys.envios.detail(codigo),
        queryFn: async () => (await getShipmentByTrackingCode(codigo)).data,
        enabled: !!codigo,
    })
}

export const useAsignarRepartidor = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async ({id, body}: {id: string, body: AssignCourierForm}) => (await assignCourier(id, body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.envios.all })
            toast.add({ type: "success", description: "Repartidor asignado" })
        }
    })
}

export const useActualizarEstadoEnvio = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async ({id, body}: {id: string, body: UpdateShipmentStatus}) => (await updateShipmentStatus(id, body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.envios.all })
            toast.add({ type: "success", description: "Estado actualizado" })
        }
    })
}

export const useCancelarEnvio = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async (id: string) => (await cancelShipment(id)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.envios.all })
            toast.add({ type: "success", description: "Envio cancelado" })
        }
    })
}

export const useEnviosMios = (estado?: EstadoEnvio) => {
    return useQuery({
        queryKey: queryKeys.envios.mine(estado),
        queryFn: async () => (await getShipmentsMine(estado)).data,
        placeholderData: keepPreviousData,
    })
}

export const useEnviosAsignadosAMi = (estado?: EstadoEnvio) => {
    return useQuery({
        queryKey: queryKeys.envios.tome(estado),
        queryFn: async () => (await getShipmentsAssignedToMe(estado)).data,
        placeholderData: keepPreviousData,
    })
}