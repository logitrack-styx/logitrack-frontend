import { useCancelarEnvio } from "../../hooks/useEnvio"
import type { Envio } from "../../types/envio-types"
import { Button } from "../ui/button"

type Props = {
    envio: Envio
} 

export default function CancelarEnvioButton({ envio }: Props) {

    const { mutate: cancelarEnvio, isPending } = useCancelarEnvio()

    if (envio.estado !== "PENDIENTE") return null

    return (
        <div className="flex flex-col items-end gap-1">
            <Button
                variant={"destructive"}
                size={"xs"}
                disabled={isPending}
                onClick={() => cancelarEnvio(envio.id)}
            >
                Cancelar
            </Button>
        </div>
    )
}