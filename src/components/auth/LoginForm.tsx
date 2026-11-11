import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useState } from "react";
import { useLogin } from "../../hooks/auth/useLogin";
import type { LoginForm } from "../../types/auth-types";

const initialState: LoginForm = {
    username: "",
    password: ""
}
export default function LoginForm() {

    const [ loginForm, setLoginForm ] = useState<LoginForm>(initialState)
    const { mutate: loginUser, isPending } = useLogin()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(loginForm)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Iniciar Sesion</CardTitle>
                <CardDescription>
                    Ingresa tu nombre de usuario para iniciar sesion
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">
                                Username
                            </FieldLabel>
                            <Input
                                id="username"
                                type="text"
                                placeholder="usernameexample123"
                                name="username" value={loginForm.username} onChange={handleChange}
                                required
                            />
                        </Field>
                        <Field>
                            <div className="flex items-center">
                            <FieldLabel htmlFor="password">
                                Contraseña
                            </FieldLabel>
                            </div>
                            <Input id="password" type="password" name="password" value={loginForm.password} onChange={handleChange} required />
                        </Field>
                        <Field>
                            <Button className="cursor-pointer" type="submit" disabled={isPending}>
                                Iniciar Sesion
                            </Button>
                            <FieldDescription className="text-center">
                                ¿No tiene una Cuenta? <Link to={"/register"}>Crear una cuenta</Link>
                            </FieldDescription>
                            <FieldDescription className="text-center">
                                Ir a <Link to={"/"}>Inicio</Link>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}