import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createCourier, getCourierById, getCouriers, updateCourierStatus } from "../services/repartidor-services"
import type { CreateCourierForm, EstadoRepartidor, UpdateCourierStatusForm } from "../types/repartidor-types"
import { toast } from "../components/ui/toast"

export const useRepartidores = (estado?: EstadoRepartidor) => {
    return useQuery({
        queryKey: ["repartidores"],
        queryFn: async () => (await getCouriers(estado)).data,
    })
}

export const useRepartidor = (id: string) => {
    return useQuery({
        queryKey: ["repartidor", id],
        queryFn: async () => (await getCourierById(id)).data,
        enabled: !!id,
    })
}

export const useCrearRepartidor = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async (body: CreateCourierForm) => (await createCourier(body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["repartidor"] })
            toast.add({ type: "success", description: "Repartidor creado correctamente" })
        }
    })
}

export const useActualizarEstadoRepartidor = () => {
    const qc = useQueryClient()
    
    return useMutation({
        mutationFn: async ({id, body}: {id: string, body: UpdateCourierStatusForm}) => (await updateCourierStatus(id, body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["repartidor"] })
            toast.add({ type: "success", description: "Estado actualizado" })
        }
    })
}