import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import EstadoEnvioBadge from "./EstadoEnvioBadge";
import { Link, useParams } from "react-router";
import NotFound from "../pages/NotFound";
import { useEnvioById } from "../../hooks/useEnvio";
import { useRoles } from "../../hooks/useRoles";
import AsignarRepartidorForm from "./AsignarRepartidorForm";

export default function EnvioDetails() {

    const { id } = useParams()
    const { data: envio, isPending, isError } = useEnvioById(id ?? "")

    const roles = useRoles()
    const isAdmin = roles.includes("ADMIN")

    if (isPending) return <p>Cargando...</p>

    if (isError || !envio) {
        return <NotFound />
    }

    return (
        <div className="px-3 py-3">
            <div className="flex justify-between px-3 pb-3">
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold">
                        Envio: {envio.codigoSeguimiento}
                    </h1>
                    <EstadoEnvioBadge estado={envio.estado} />
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-1 text-slate-600">
                        <Link to="/envios">
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
                            Datos del envío
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <p>Cliente</p>
                                <p>{envio.clienteId}</p>
                            </div>
                            <div>
                                <p>Tarifa</p>
                                <p>{envio.tarifa}</p>
                            </div>
                            <div>
                                <p>Peso</p>
                                <p>{envio.peso}</p>
                            </div>
                            <div>
                                <p>Tamaño</p>
                                <p>{envio.alto} x {envio.largo} x {envio.ancho}</p>
                            </div>
                            {/* <div>
                                <p>Fecha de registro</p>
                                <p>fecha</p>
                            </div><div>
                                <p>Utima actualizacion</p>
                                <p>fecha</p>
                            </div> */}
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold">
                            Direccion de Origen
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 grid-cols-2">
                            <div>
                                <p>Calle</p>
                                <p>{envio.origen.calle}</p>
                            </div>
                            <div>
                                <p>Numero</p>
                                <p>{envio.origen.numero}</p>
                            </div>
                            <div>
                                <p>Ciudad</p>
                                <p>{envio.origen.ciudad}</p>
                            </div>
                            <div>
                                <p>Codigo Postal</p>
                                <p>{envio.origen.codigoPostal}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold">
                            Direccion de Destino
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 grid-cols-2">
                            <div>
                                <p>Calle</p>
                                <p>{envio.destino.calle}</p>
                            </div>
                            <div>
                                <p>Numero</p>
                                <p>{envio.destino.numero}</p>
                            </div>
                            <div>
                                <p>Ciudad</p>
                                <p>{envio.destino.ciudad}</p>
                            </div>
                            <div>
                                <p>Codigo Postal</p>
                                <p>{envio.destino.codigoPostal}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            {isAdmin && envio.estado === "PENDIENTE" && !envio.repartidorId && (
                <AsignarRepartidorForm envioId={envio.id} />
            )}
        </div>
    )
}