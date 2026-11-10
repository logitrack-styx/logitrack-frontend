import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import RepartidorRow from "./RepartidorRow"

const estadoRepartidor = [
    { label: "Todos", value: "" },
    { label: "Activo", value: "ACTIVO" },
    { label: "Inactivo", value: "INACTIVO" }
]

const repartidores = [
    {
        id: 1,
        nombre: "nombre",
        tipoVehiculo: "vehiculo 1",
        estado: "ACTIVO",
    },{
        id: 2,
        nombre: "nombre",
        tipoVehiculo: "vehiculo 2",
        estado: "INACTIVO",
    },
]

export default function RepartidoresTable() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-balance font-semibold text-foreground text-lg">
                        Repartidores
                    </h3>
                    <p className="mt-1 text-pretty text-muted-foreground text-sm">
                        
                    </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Select items={estadoRepartidor} defaultValue={""}>
                        <SelectTrigger className="w-full sm:w-45">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Estados de repartidores</SelectLabel>
                                {estadoRepartidor.map((estado) => (
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
                        {repartidores.length > 0 ? (
                            repartidores.map((repartidor) => (
                                <RepartidorRow key={repartidor.id} repartidor={repartidor} />
                            ))
                        ) : (
                        <TableRow>
                            <TableCell
                                className="h-24 text-center text-muted-foreground"
                                colSpan={6}
                                >
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