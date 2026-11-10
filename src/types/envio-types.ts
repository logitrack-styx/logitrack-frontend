export type EstadoEnvio = "PENDIENTE" | "EN_RUTA" | "ENTREGADO" | "CANCELADO"

export interface Direccion {
    calle: string
    numero: string
    ciudad: string
    codigoPostal: string
}

export interface Envio {
    id: string
    codigoSeguimiento: string
    peso: number
    ancho: number
    alto: number
    largo: number
    tarifa: number
    estadoEnvio: EstadoEnvio
    direccionOrigen: Direccion
    direccionDestino: Direccion
    clienteId: string
    courierId: string | null
}

export interface CreateShipmentForm {
    peso: number
    ancho: number
    alto: number
    largo: number
    tarifa: number
    direccionOrigen: Direccion
    direccionDestino: Direccion
    clienteId: string
}

export interface AssignCourierForm {
    repartidorId: string
}

export interface UpdateShipmentStatus {
    estado: EstadoEnvio
}