import { useState } from "react";
import type { CreateUserForm, Role } from "../../types/usuario-types";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useCrearUsuario } from "../../hooks/useUsuario";

const rolUsuario = [
    { label: "Cliente", value: "CLIENTE" },
    { label: "Repartidor", value: "REPARTIDOR" },
    { label: "Admin", value: "ADMIN" }
]

const initialState: CreateUserForm = {
    username: "",
    email: "",
    password: "",
    role: "CLIENTE" as Role,
}

export default function UsuarioFrom() {

    const [form, setForm] = useState(initialState)
    const { mutate: createUser, isPending } = useCrearUsuario()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUser(form, {
            onSuccess: () => setForm(initialState),
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Crear un usuario</CardTitle>
                <CardDescription>
                    Registra un nuevo usuario
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">
                                Username
                            </FieldLabel>
                            <Input id="username" type="text" placeholder="usernameexample123" name="username" value={form.username} onChange={handleChange} required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">
                                Email
                            </FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                name="email" value={form.email} onChange={handleChange}
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">
                                Contraseña
                            </FieldLabel>
                            <Input id="password" type="password" name="password" value={form.password} onChange={handleChange} required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="role">
                                Rol
                            </FieldLabel>
                            <Select 
                                items={rolUsuario} 
                                value={form.role}
                                onValueChange={(value) =>
                                    setForm({ ...form, role: (value ?? "CLIENTE") as Role })
                                }>
                                <SelectTrigger className="w-full sm:w-45">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Rol de un usuario</SelectLabel>
                                        {rolUsuario.map((rol) => (
                                            <SelectItem key={rol.value} value={rol.value}>
                                                {rol.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                        <FieldGroup>
                            <Field>
                                <Button type="submit" disabled={isPending}>
                                    Crear Usuario
                                </Button>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}