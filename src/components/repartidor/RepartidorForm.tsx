import { useState } from "react"
import type { CreateCourierForm } from "../../types/repartidor-types"
import { useCrearRepartidor } from "../../hooks/useRepartidor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Field, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"

const initialState: CreateCourierForm = {
    userId: "",
    nombre: "",
    tipoVehiculo: ""
}

export default function RepartidorForm() {
    const [form, setForm] = useState(initialState)
    const { mutate: createCourier, isPending } = useCrearRepartidor()

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createCourier(form, {
            onSuccess: () => {
                navigate("/repartidores")
                setForm(initialState)
            },
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Crear un repartidor</CardTitle>
                <CardDescription>
                    Registra un repartidor previamente registrado como usuario
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="userId">
                                ID de usario
                            </FieldLabel>
                            <Input id="userId" type="text" placeholder="idexample123" name="userId" value={form.userId} onChange={handleChange} required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="nombre">
                                Nombre
                            </FieldLabel>
                            <Input
                                id="nombre"
                                type="text"
                                placeholder="nombreexample123"
                                name="nombre" value={form.nombre} onChange={handleChange}
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="tipoVehiculo">
                                Tipo de Vehiculo
                            </FieldLabel>
                            <Input id="tipoVehiculo" type="text" name="tipoVehiculo" value={form.tipoVehiculo} onChange={handleChange} required />
                        </Field>
                        <FieldGroup>
                            <Field>
                                <Button type="submit" disabled={isPending}>
                                    Crear Repartidor
                                </Button>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}