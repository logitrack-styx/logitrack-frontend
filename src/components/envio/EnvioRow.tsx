import { Link } from "react-router";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import EstadoEnvioBadge from "./EstadoEnvioBadge";

export default function EnvioRow({envio}: any) {
    return (
        <TableRow className="hover:bg-muted/50" key={envio.id}>
            <TableCell className="h-14 px-4 font-medium font-mono text-sm tabular-nums">
                {envio.codigo}
            </TableCell>
            <TableCell className="h-14 px-4 font-semibold text-sm">
                {envio.cliente}
            </TableCell>
            <TableCell className="h-14 px-4 text-right font-medium">
                $ {envio.tarifa}
            </TableCell>
            <TableCell className="h-14 px-4 text-center">
                <EstadoEnvioBadge estado={envio.estado}/>
            </TableCell>
            <TableCell className="h-14 px-4 text-left text-muted-foreground text-sm tabular-nums">
                {envio.direccionOrigen.ciudad}
            </TableCell>
            <TableCell className="h-14 px-4 text-left text-muted-foreground text-sm tabular-nums">
                {envio.direccionDestino.ciudad}
            </TableCell>
            <TableCell className="h-14 px-4 font-semibold text-sm">
                {envio.repartidor}
            </TableCell>
            <TableCell className="h-14 px-4 text-center">
                <>
                    <Button size={"xs"}>
                        <Link to={`/envio`}>
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