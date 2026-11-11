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
    estado: EstadoEnvio
    origen: Direccion
    destino: Direccion
    clienteId: string
    repartidorId: string | null
}

export interface CreateShipmentForm {
    peso: number
    ancho: number
    alto: number
    largo: number
    tarifa: number
    origen: Direccion
    destino: Direccion
    clienteId: string
}

export interface Asignacion {
    envioId: string
    codigoSeguimiento: string
    repartidorId: string
}

export interface AssignCourierForm {
    repartidorId: string
}

export interface UpdateShipmentStatus {
    estado: EstadoEnvio
}