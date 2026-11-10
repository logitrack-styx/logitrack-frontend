export type Role = "ADMIN" | "CLIENTE" | "REPARTIDOR"

export interface Usuario {
    id: string
    username: string
    email: string
    role: Role[]
    eneable: boolean
}

export interface CreateUserForm {
    username: string
    email: string
    password: string
    role: Role
}