export type EstadoRepartidor = "ACTIVO" | "INACTIVO"

export interface Repartidor {
    id: string
    nombre: string
    tipoVehiculo: string
    estadoRepartidor: EstadoRepartidor
}

export interface CreateCourierForm {
    nombre: string
    tipoVehiculo: string
}

export interface UpdateCourierStatusForm {
    estado: EstadoRepartidor
}