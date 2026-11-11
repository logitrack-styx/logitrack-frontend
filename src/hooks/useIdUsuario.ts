import { useMemo } from "react"
import { useAppContext } from "./useAppContext"
import { decodedToken } from "../helpers/decode-token"

export function useIdUsuario(): string | null {
    const token = useAppContext((s) => s.token)

    return useMemo(() => {
        if (!token) return null
        return decodedToken(token)?.sub ?? null
    }, [token])
}