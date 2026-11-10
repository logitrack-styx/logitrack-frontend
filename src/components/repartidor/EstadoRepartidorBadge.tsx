import { Badge } from "../ui/badge";

export default function EstadoRepartidorBadge({estado}: any) {
    switch (estado) {
        case 'ACTIVO':
            return (
                <Badge
                className="border-0 bg-green-500/15 text-green-700 hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20"
                variant="outline"
                >
                    Activo
                </Badge>
            );
        case 'INACTIVO':
            return (
                <Badge
                className="border-0 bg-rose-500/15 text-rose-700 hover:bg-rose-500/25 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20"
                variant="outline"
                >
                    Inactivo
                </Badge>
            );
        default:
            return (
                <Badge variant="secondary">{estado}</Badge>
            );
    }
}