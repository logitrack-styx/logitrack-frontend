import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const rolUsuario = [
    { label: "Cliente", value: "CLIENTE" },
    { label: "Repartidor", value: "REPARTIDOR" },
    { label: "Admin", value: "ADMIN" }
]

export default function UsuarioFrom() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Crear un usuario</CardTitle>
                <CardDescription>
                    Registra un nuevo usuario
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">
                                Username
                            </FieldLabel>
                            <Input id="username" type="text" placeholder="usernameexample123" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">
                                Email
                            </FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">
                                Contraseña
                            </FieldLabel>
                            <Input id="password" type="password" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="role">
                                Rol
                            </FieldLabel>
                            <Select items={rolUsuario} defaultValue={"CLIENTE"}>
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
                                <Button type="submit">
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