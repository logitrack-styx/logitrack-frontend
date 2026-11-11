import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRegister } from "../../hooks/auth/useRegister";
import type { RegisterForm } from "../../types/auth-types";

const initialState: RegisterForm = {
    username: "",
    email: "",
    password: ""
}

export default function RegisterForm() {
    
    const [ registerForm, setRegisterForm ] = useState<RegisterForm>(initialState)
    const { mutate: registerUser, isPending } = useRegister()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registerUser(registerForm)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Crear una cuenta</CardTitle>
                <CardDescription>
                    Ingresa tu informacion para crear una cuenta
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">
                                Username
                            </FieldLabel>
                            <Input id="username" type="text" placeholder="usernameexample123" name="username" value={registerForm.username} onChange={handleChange} required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">
                                Email
                            </FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                name="email" value={registerForm.email} onChange={handleChange}
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">
                                Contraseña
                            </FieldLabel>
                            <Input id="password" type="password" name="password" value={registerForm.password} onChange={handleChange} required />
                        </Field>
                        {/* <Field>
                            <FieldLabel htmlFor="confirm-password">
                                Confirmar Contraseña
                            </FieldLabel>
                            <Input id="confirm-password" type="password" required />
                            <FieldDescription>Porfavor confirme su contraseña.</FieldDescription>
                        </Field> */}
                        <FieldGroup>
                            <Field>
                                <Button className="cursor-pointer" type="submit" disabled={isPending}>
                                    Crear Cuenta
                                </Button>
                                <FieldDescription className="px-6 text-center">
                                    ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar Sesion</Link>
                                </FieldDescription>
                                <FieldDescription className="text-center">
                                    Ir a <Link to={"/"}>Inicio</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}