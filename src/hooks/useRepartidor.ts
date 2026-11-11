import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createCourier, getCourierById, getCouriers, updateCourierStatus } from "../services/repartidor-services"
import type { CreateCourierForm, EstadoRepartidor, UpdateCourierStatusForm } from "../types/repartidor-types"
import { toast } from "../components/ui/toast"
import { queryKeys } from "../config/query-keys"

export const useRepartidores = (estado?: EstadoRepartidor) => {
    return useQuery({
        queryKey: queryKeys.repartidores.list(estado),
        queryFn: async () => (await getCouriers(estado)).data,
    })
}

export const useRepartidor = (id: string) => {
    return useQuery({
        queryKey: queryKeys.repartidores.detail(id),
        queryFn: async () => (await getCourierById(id)).data,
        enabled: !!id,
    })
}

export const useCrearRepartidor = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async (body: CreateCourierForm) => (await createCourier(body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.repartidores.all })
            toast.add({ type: "success", description: "Repartidor creado correctamente" })
        }
    })
}

export const useActualizarEstadoRepartidor = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async ({id, body}: {id: string, body: UpdateCourierStatusForm}) => (await updateCourierStatus(id, body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.repartidores.all })
            toast.add({ type: "success", description: "Estado actualizado" })
        }
    })
}