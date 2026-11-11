import { useActualizarEstadoEnvio } from "../../hooks/useEnvio";
import type { Envio, EstadoEnvio } from "../../types/envio-types";
import { Button } from "../ui/button";

const SIGUIENTE_ESTADO: Partial<Record<EstadoEnvio, { next: EstadoEnvio; label: string }>> = {
    PENDIENTE: { next: "EN_RUTA", label: "Marcar en ruta" },
    EN_RUTA: { next: "ENTREGADO", label: "Marcar como entregado" },
}

type Props = {
    envio: Envio
} 

export default function CambiarEstadoButton({ envio }: Props) {

    const { mutate: cambiarEstado, isPending } = useActualizarEstadoEnvio()

    const transicion = SIGUIENTE_ESTADO[envio.estado]

    if (!transicion) return null

    const sinRepartidor = envio.estado === "PENDIENTE" && !envio.repartidorId

    return (
        <div className="flex flex-col items-end gap-1">
            <Button
                size={"xs"}
                disabled={isPending || sinRepartidor}
                onClick={() => cambiarEstado({ id: envio.id, body: { estado: transicion.next } })}
            >
                {isPending ? "Actualizando..." : transicion.label}
            </Button>
            {sinRepartidor && (
                <p className="text-xs text-muted-foreground">
                </p>
            )}
        </div>
    )
}