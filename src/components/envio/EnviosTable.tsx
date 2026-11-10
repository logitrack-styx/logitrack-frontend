import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import EnvioRow from "./EnvioRow";

const estadoEnvio = [
    { label: "Todos", value: "" },
    { label: "Pendiente", value: "PENDIENTE" },
    { label: "En Ruta", value: "EN_RUTA" },
    { label: "Entregado", value: "ENTREGADO" },
    { label: "Cancelado", value: "CANCELADO" }
]

const envios = [
    {
        id: 1,
        codigo: 1,
        peso: 1,
        ancho: 1,
        alto: 1,
        largo: 1,
        tarifa: 1,
        estado: "PENDIENTE",
        direccionOrigen: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        direccionDestino: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        cliente: 1,
        repartidor: "-",
    },{
        id: 2,
        codigo: 1,
        peso: 1,
        ancho: 1,
        alto: 1,
        largo: 1,
        tarifa: 1,
        estado: "EN_RUTA",
        direccionOrigen: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        direccionDestino: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        cliente: 1,
        repartidor: "-",
    },{
        id: 3,
        codigo: 1,
        peso: 1,
        ancho: 1,
        alto: 1,
        largo: 1,
        tarifa: 1,
        estado: "ENTREGADO",
        direccionOrigen: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        direccionDestino: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        cliente: 1,
        repartidor: "-",
    },{
        id: 4,
        codigo: 1,
        peso: 1,
        ancho: 1,
        alto: 1,
        largo: 1,
        tarifa: 1,
        estado: "CANCELADO",
        direccionOrigen: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        direccionDestino: {
            calle: 1,
            numero: 1,
            ciudad: 1,
            codigoPostal: 1,
        },
        cliente: 1,
        repartidor: "-",
    },
]

export default function EnviosTable() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-balance font-semibold text-foreground text-lg">
                        Envios
                    </h3>
                    <p className="mt-1 text-pretty text-muted-foreground text-sm">
                        
                    </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Select items={estadoEnvio} defaultValue={""}>
                        <SelectTrigger className="w-full sm:w-45">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Estados de envios</SelectLabel>
                                {estadoEnvio.map((estado) => (
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
                        {envios.length > 0 ? (
                            envios.map((envio) => (
                                <EnvioRow key={envio.id} envio={envio} />
                            ))
                        ) : (
                        <TableRow>
                            <TableCell
                                className="h-24 text-center text-muted-foreground"
                                colSpan={6}
                                >
                                No hay envios.
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}