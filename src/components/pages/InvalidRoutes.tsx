import { Navigate, Outlet } from "react-router"
import { useAppContext } from "../../hooks/useAppContext"

export default function InvalidRoutes() {

    const isAuthenticated = useAppContext((s) => s.isAuthenticated)

    if (isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}