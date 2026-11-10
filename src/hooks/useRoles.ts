import { useMemo } from "react"
import { useAppContext } from "./useAppContext"
import { decodedToken } from "../helpers/decode-token"
import type { Role } from "../types/usuario-types"

const EMPTY: Role[] = []

export function useRoles(): Role[] {

    const token = useAppContext((s) => s.token)

    return useMemo(() => {
        if (!token) return EMPTY
        const claims = decodedToken(token)
        return claims ? (claims.roles as Role[]) : EMPTY
    }, [token])

}