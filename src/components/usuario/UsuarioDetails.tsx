import { useUsuarioActual } from "../../hooks/useUsuario";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function UsuarioDetails() {

    const { data: usuario, isPending } = useUsuarioActual()

    if (isPending) return <p>Cargando...</p>

    return (
        <div className="px-3 py-3">
            <div className="flex justify-between px-3 pb-3">
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold">
                        Usuario: {usuario?.id}
                    </h1>
                </div>
            </div>
            <div className="grid gap-2">
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold">
                            Datos del usuario
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 grid-cols-2">
                            <div>
                                <p>Username</p>
                                <p>{usuario?.username}</p>
                            </div>
                            <div>
                                <p>Email</p>
                                <p>{usuario?.email}</p>
                            </div>
                            <div>
                                <p>Rol</p>
                                <p>{usuario?.role}</p>
                            </div>
                            <div>
                                <p>Habilitado</p>
                                <p>{usuario?.enable}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}