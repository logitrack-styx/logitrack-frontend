import type { EstadoEnvio } from "../../types/envio-types";
import { Badge } from "../ui/badge";

type Props = {
    estado: EstadoEnvio
}

export default function EstadoEnvioBadge({ estado }: Props) {
    switch (estado) {
        case 'PENDIENTE':
            return (
                <Badge
                className="border-0 bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 dark:bg-amber-500/10 dark:text-amber-300 dark:hover:bg-amber-500/20"
                variant="outline"
                >
                    Pendiente
                </Badge>
            );
        case 'EN_RUTA':
            return (
                <Badge
                className="border-0 bg-blue-500/15 text-blue-700 hover:bg-blue-500/25 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20"
                variant="outline"
                >
                    En Ruta
                </Badge>
            );
        case 'ENTREGADO':
            return (
                <Badge
                className="border-0 bg-green-500/15 text-green-700 hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20"
                variant="outline"
                >
                    Entregado
                </Badge>
            );
        case 'CANCELADO':
            return (
                <Badge
                className="border-0 bg-rose-500/15 text-rose-700 hover:bg-rose-500/25 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20"
                variant="outline"
                >
                    Cancelado
                </Badge>
            );
        default:
            return (
                <Badge variant="secondary">{estado}</Badge>
            );
    }
}