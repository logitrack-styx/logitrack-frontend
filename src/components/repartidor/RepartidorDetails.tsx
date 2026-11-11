import { Link, useParams } from "react-router"
import { useRepartidor } from "../../hooks/useRepartidor"
import NotFound from "../pages/NotFound"
import EstadoRepartidorBadge from "./EstadoRepartidorBadge"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function RepartidorDetails() {
    const { id } = useParams()
    const { data: repartidor, isPending, isError } = useRepartidor(id ?? "")

    if (isPending) return <p>Cargando...</p>

    if (isError || !repartidor) {
        return <NotFound />
    }

    return (
        <div className="px-3 py-3">
            <div className="flex justify-between px-3 pb-3">
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold">
                        Repartidor: {repartidor.id}
                    </h1>
                    <EstadoRepartidorBadge estado={repartidor.estado} />
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-1 text-slate-600">
                        <Link to="/repartidores">
                            <ArrowLeft className="h-4 w-4" />
                            Volver al listado
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="grid gap-2">
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold">
                            Datos del repartidor
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 grid-cols-2">
                            <div>
                                <p>Nombre</p>
                                <p>{repartidor.nombre}</p>
                            </div>
                            <div>
                                <p>Tipo de Vehiculo</p>
                                <p>{repartidor.tipoVehiculo}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}