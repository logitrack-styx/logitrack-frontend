import { useState } from "react"
import { useAsignarRepartidor } from "../../hooks/useEnvio"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Field, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import type { AssignCourierForm } from "../../types/envio-types"
import { useNavigate } from "react-router"

interface Props {
    envioId: string
}

const initialState: AssignCourierForm = {
    repartidorId: ""
}

export default function AsignarRepartidorForm({ envioId }: Props) {
    
    const [form, setForm] = useState(initialState)
    const { mutate: asignar, isPending } = useAsignarRepartidor()

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        asignar({ id: envioId, body: form })
        navigate("/envios")
    }

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-sm font-semibold">
                    Asignar repartidor
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="repartidorId">
                                Id de repartidor
                            </FieldLabel>
                            <Input
                                id="repartidorId"
                                name="repartidorId"
                                value={form.repartidorId}
                                onChange={handleChange}
                                placeholder="repartidorId"
                                required
                            />
                        </Field>
                        <Field>
                            <Button type="submit" disabled={isPending}>
                                Asignar repartidor
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}