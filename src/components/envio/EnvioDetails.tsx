import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import EstadoEnvioBadge from "./EstadoEnvioBadge";

export default function EnvioDetails() {
    return (
        <div className="px-3 py-3">
            <div className="flex justify-between px-3 pb-3">
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold">
                        Envio: Codigo de seguimiento
                    </h1>
                    <EstadoEnvioBadge estado={"Estado"} />
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-1 text-slate-600">
                        <ArrowLeft className="h-4 w-4" />
                        Volver al listado
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
                                <p>nombre de cliente</p>
                            </div>
                            <div>
                                <p>Tarifa</p>
                                <p>tarifa</p>
                            </div>
                            <div>
                                <p>Peso</p>
                                <p>peso</p>
                            </div>
                            <div>
                                <p>Tamaño</p>
                                <p>alto x largo x ancho</p>
                            </div>
                            <div>
                                <p>Fecha de registro</p>
                                <p>fecha</p>
                            </div><div>
                                <p>Utima actualizacion</p>
                                <p>fecha</p>
                            </div>
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
                                <p>calle</p>
                            </div>
                            <div>
                                <p>Numero</p>
                                <p>numero</p>
                            </div>
                            <div>
                                <p>Ciudad</p>
                                <p>ciudad</p>
                            </div>
                            <div>
                                <p>Codigo Postal</p>
                                <p>codigo</p>
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
                                <p>calle</p>
                            </div>
                            <div>
                                <p>Numero</p>
                                <p>numero</p>
                            </div>
                            <div>
                                <p>Ciudad</p>
                                <p>ciudad</p>
                            </div>
                            <div>
                                <p>Codigo Postal</p>
                                <p>codigo</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}