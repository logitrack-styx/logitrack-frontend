import { AxiosError } from "axios"

export const getErrorMessage = ((error: unknown): string => {
    if (error instanceof AxiosError) {
        if (error.response) {
            return error.response.data.message ?? "Error interno"
        }
        return "No se pudo conectar con el servidor"
    }
    return "Error Inesperado"
})