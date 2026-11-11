import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createUser, getCurrentUser, getUser } from "../services/usuario-service"
import { useAppContext } from "./useAppContext"
import type { CreateUserForm } from "../types/usuario-types"
import { toast } from "../components/ui/toast"
import { queryKeys } from "../config/query-keys"


export const useUsuarioActual = () => {
    const token = useAppContext((s) => s.token)
    
    return useQuery({
        queryKey: queryKeys.usuarios.me,
        queryFn: async () => (await getCurrentUser()).data,
        enabled: !!token
    })
}

export const useUsuario = (id: string) => {
    return useQuery({
        queryKey: queryKeys.usuarios.detail(id),
        queryFn: async () => (await getUser(id)).data,
        enabled: !!id
    })
}

export const useCrearUsuario = () => {
    const qc = useQueryClient()

    return useMutation({
        mutationFn: async (body: CreateUserForm) => (await createUser(body)).data,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: queryKeys.usuarios.all })
            toast.add({ type: "success", description: "Usuario creado correctamente" })
        }
    })
}