import { useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import RepartidorRow from "./RepartidorRow"
import type { EstadoRepartidor } from "../../types/repartidor-types"
import { useRepartidores } from "../../hooks/useRepartidor"

const estadosRepartidor = [
    { label: "Todos", value: "" },
    { label: "Activo", value: "ACTIVO" },
    { label: "Inactivo", value: "INACTIVO" }
]

export default function RepartidoresTable() {

    const [estado, setEstado] = useState("")
    
    const status = estado === "" ? undefined : (estado as EstadoRepartidor)

    const { data: repartidores = [], isPending, isFetching } = useRepartidores(status)

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-balance font-semibold text-foreground text-lg">
                        Repartidores
                    </h3>
                    <p className="mt-1 text-pretty text-muted-foreground text-sm">
                        {isFetching && !isPending ? "Actualizando..." : ""}
                    </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Select items={estadosRepartidor} value={estado} onValueChange={(value) => setEstado(value ?? "")}>
                        <SelectTrigger className="w-full sm:w-45">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Estados de repartidores</SelectLabel>
                                {estadosRepartidor.map((estado) => (
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
                                ID
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Nombre
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Tipo de Vehiculo
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Estado
                            </TableHead>
                            <TableHead className="h-12 px-4 font-medium text-center">
                                Acciones
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isPending ? (
                            <TableRow>
                                <TableCell className="h-24 text-center text-muted-foreground" colSpan={5}>
                                    Cargando repartidores...
                                </TableCell>
                            </TableRow>
                        ) : repartidores.length > 0 ? (
                            repartidores.map((repartidor) => (
                                <RepartidorRow key={repartidor.id} repartidor={repartidor} />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell className="h-24 text-center text-muted-foreground" colSpan={5}>
                                    No hay repartidores.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}