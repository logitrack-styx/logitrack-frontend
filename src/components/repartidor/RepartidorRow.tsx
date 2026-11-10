import { Link } from "react-router";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import EstadoRepartidorBadge from "./EstadoRepartidorBadge";

export default function RepartidorRow({repartidor}: any) {
    return (
        <TableRow className="hover:bg-muted/50" key={repartidor.id}>
            <TableCell className="h-14 px-4 font-medium font-mono text-sm tabular-nums">
                {repartidor.id}
            </TableCell>
            <TableCell className="h-14 px-4 font-semibold text-sm">
                {repartidor.nombre}
            </TableCell>
            <TableCell className="h-14 px-4 font-semibold text-sm">
                {repartidor.tipoVehiculo}
            </TableCell>
            <TableCell className="h-14 px-4 text-center">
                <EstadoRepartidorBadge estado={repartidor.estado}/>
            </TableCell>
            <TableCell className="h-14 px-4 text-center">
                <>
                    <Button size={"xs"}>
                        <Link to={`/repartidor/${repartidor.id}`}>
                            Ver
                        </Link>
                    </Button>
                    <Button size={"xs"} variant={"secondary"}>
                        <Link to={'#'}>
                            Cambiar Estado
                        </Link>
                    </Button>
                </>
            </TableCell>
        </TableRow>
    )
}