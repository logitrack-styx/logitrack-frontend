import { decodedToken } from "../../helpers/decode-token"
import { useAppContext } from "../../hooks/useAppContext"
import { Navigate, Outlet, useLocation } from "react-router"
import type { Role } from "../../types/usuario-types";

interface Props {
    roles?: Role[];
}

export default function ProtectedRoutes({roles}: Props) {

    const token = useAppContext((s) => s.token)
    const location = useLocation()

    const claims = token ? decodedToken(token) : null
    
    if (!claims) {
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    if (roles && !roles.some((r) => claims.roles.includes(r))) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}