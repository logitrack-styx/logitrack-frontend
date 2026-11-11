import { Link } from "react-router";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import EstadoEnvioBadge from "./EstadoEnvioBadge";
import type { Envio } from "../../types/envio-types";
import CambiarEstadoButton from "./CambiarEstadoButton";
import CancelarEnvioButton from "./CancelarEnvioButton";

type Props = {
    envio: Envio
}

export default function EnvioRow({ envio }: Props) {
    return (
        <TableRow className="hover:bg-muted/50" key={envio.id}>
            <TableCell className="h-14 px-4 font-medium font-mono text-sm tabular-nums">
                {envio.codigoSeguimiento}
            </TableCell>
            <TableCell className="h-14 px-4 font-semibold text-sm">
                {envio.clienteId}
            </TableCell>
            <TableCell className="h-14 px-4 text-right font-medium">
                $ {envio.tarifa}
            </TableCell>
            <TableCell className="h-14 px-4 text-center">
                <EstadoEnvioBadge estado={envio.estado}/>
            </TableCell>
            <TableCell className="h-14 px-4 text-left text-muted-foreground text-sm tabular-nums">
                {envio.origen.ciudad}
            </TableCell>
            <TableCell className="h-14 px-4 text-left text-muted-foreground text-sm tabular-nums">
                {envio.destino.ciudad}
            </TableCell>
            <TableCell className="h-14 px-4 font-semibold text-sm">
                {envio.repartidorId ? envio.repartidorId : "No Asignado"}
            </TableCell>
            <TableCell className="h-14 px-4 text-center">
                <>
                    <Button size={"xs"}>
                        <Link to={`/envio/${envio.id}`}>
                            Ver
                        </Link>
                    </Button>
                    <CambiarEstadoButton envio={envio} />
                    {/* <CancelarEnvioButton envio={envio} /> */}
                </>
            </TableCell>
        </TableRow>
    )
}