export type EstadoRepartidor = "ACTIVO" | "INACTIVO"

export interface Repartidor {
    id: string
    nombre: string
    tipoVehiculo: string
    estado: EstadoRepartidor
}

export interface CreateCourierForm {
    userId: string
    nombre: string
    tipoVehiculo: string
}

export interface UpdateCourierStatusForm {
    estado: EstadoRepartidor
}

export interface Disponibilidad {
    id: string
    disponible: boolean
    estado: EstadoRepartidor
}