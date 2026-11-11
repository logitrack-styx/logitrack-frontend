import { useState } from "react";
import type { CreateShipmentForm, Direccion } from "../../types/envio-types";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { useCrearEnvio } from "../../hooks/useEnvio";
import { useRoles } from "../../hooks/useRoles";
import { useIdUsuario } from "../../hooks/useIdUsuario";

const emptyAddress: Direccion = { 
    calle: "", 
    numero: "", 
    ciudad: "", 
    codigoPostal: "" 
}

const initialState: CreateShipmentForm = {
    clienteId: "",
    peso: 0,
    alto: 0,
    largo: 0,
    ancho: 0,
    tarifa: 0,
    origen: emptyAddress,
    destino: emptyAddress,
}

function AddressFields({
    legend, prefix, value, onChange,
}: {
    legend: string
    prefix: string 
    value: Direccion
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    const fields: { name: keyof Direccion; label: string }[] = [
        { name: "calle", label: "Calle" },
        { name: "numero", label: "Número" },
        { name: "ciudad", label: "Ciudad" },
        { name: "codigoPostal", label: "Código postal" },
    ]

    return (
        <FieldSet>
            <FieldLegend>{legend}</FieldLegend>
            <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                    {fields.map(({ name, label }) => (
                        <Field key={name}>
                            <FieldLabel htmlFor={`${prefix}-${name}`}>{label}</FieldLabel>
                            <Input
                                id={`${prefix}-${name}`}
                                name={name}
                                value={value[name]}
                                onChange={onChange}
                                required
                            />
                        </Field>
                    ))}
                </div>
            </FieldGroup>
        </FieldSet>
    )
}

export default function EnvioForm() {

    const [form, setForm] = useState(initialState)
    const { mutate: createEnvio, isPending } = useCrearEnvio()

    const roles = useRoles()
    const userId = useIdUsuario()
    const isAdmin = roles.includes("ADMIN")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleAddressChange = (section: "origen" | "destino") =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({
                ...form,
                [section]: { ...form[section], [e.target.name]: e.target.value },
            })
        }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const customerId = isAdmin ? form.clienteId : userId
        if (!customerId) return

        createEnvio(form)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Crear un envio</CardTitle>
                <CardDescription>
                    Registra un nuevo envio
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        {isAdmin && (
                            <>
                                <FieldSet>
                                    <FieldLegend>Datos del cliente</FieldLegend>
                                    <FieldDescription>
                                    </FieldDescription>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="clienteId">
                                                Id de cliente
                                            </FieldLabel>
                                            <Input id="clienteId" type="text" placeholder="clienteId" name="clienteId" value={form.clienteId} onChange={handleChange} required />
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>
                                <FieldSeparator />
                            </>
                        )}
                        <FieldSet>
                            <FieldLegend>Datos del envio</FieldLegend>
                            <FieldDescription>
                            </FieldDescription>
                            <FieldGroup>
                                <div className="grid grid-cols-3 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="ancho">
                                            Ancho
                                        </FieldLabel>
                                        <Input id="ancho" type="number" placeholder="10" name="ancho" value={form.ancho} onChange={handleChange} required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="alto">
                                            Alto
                                        </FieldLabel>
                                        <Input id="alto" type="number" placeholder="10" name="alto" value={form.alto} onChange={handleChange} required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="largo">
                                            Largo
                                        </FieldLabel>
                                        <Input id="largo" type="number" placeholder="10" name="largo" value={form.largo} onChange={handleChange} required />
                                    </Field>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="peso">
                                            Peso
                                        </FieldLabel>
                                        <Input id="peso" type="number" placeholder="10" name="peso" value={form.peso} onChange={handleChange} required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="tarifa">
                                            Tarifa
                                        </FieldLabel>
                                        <Input id="tarifa" type="number" placeholder="10" name="tarifa" value={form.tarifa} onChange={handleChange} required />
                                    </Field>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                        <FieldSeparator />
                        <AddressFields
                            legend="Dirección de origen del envío"
                            prefix="origen"
                            value={form.origen}
                            onChange={handleAddressChange("origen")}
                        />
                        <FieldSeparator />
                        <AddressFields
                            legend="Dirección de destino del envío"
                            prefix="destino"
                            value={form.destino}
                            onChange={handleAddressChange("destino")}
                        />
                        <FieldGroup>
                            <Field>
                                <Button type="submit" disabled={isPending}>
                                    Crear Envio
                                </Button>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )

}