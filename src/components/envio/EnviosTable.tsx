import { useState } from "react";
import { useEnvios } from "../../hooks/useEnvio";
import type { EstadoEnvio } from "../../types/envio-types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import EnvioRow from "./EnvioRow";

const estadosEnvio = [
    { label: "Todos", value: "" },
    { label: "Pendiente", value: "PENDIENTE" },
    { label: "En Ruta", value: "EN_RUTA" },
    { label: "Entregado", value: "ENTREGADO" },
    { label: "Cancelado", value: "CANCELADO" }
]

export default function EnviosTable() {

    const [estado, setEstado] = useState("")

    const status = estado === "" ? undefined : (estado as EstadoEnvio)

    const { data: envios = [], isPending, isFetching } = useEnvios(status)

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-balance font-semibold text-foreground text-lg">
                        Envios
                    </h3>
                    <p className="mt-1 text-pretty text-muted-foreground text-sm">
                        {isFetching && !isPending ? "Actualizando..." : ""}
                    </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Select items={estadosEnvio} value={estado} onValueChange={(value) => setEstado(value ?? "")}>
                        <SelectTrigger className="w-full sm:w-45">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Estados de envios</SelectLabel>
                                {estadosEnvio.map((estado) => (
                                    <SelectItem key={estado.value} value={estado.value}>
                                        {estado.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="rounded-lg border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow className="border-b hover:bg-transparent">
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Codigo de Seguimiento
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Cliente
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Tarifa
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Estado
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Ciudad de Origen
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Ciudad de Destino
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Repartidor
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Acciones
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isPending ? (
                            <TableRow>
                                <TableCell className="h-24 text-center text-muted-foreground" colSpan={8}>
                                    Cargando envíos...
                                </TableCell>
                            </TableRow>
                        ) : envios.length > 0 ? (
                            envios.map((envio) => (
                                <EnvioRow key={envio.id} envio={envio} />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell className="h-24 text-center text-muted-foreground" colSpan={8}>
                                    No hay envíos.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}