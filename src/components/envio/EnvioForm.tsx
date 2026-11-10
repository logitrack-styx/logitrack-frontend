import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "../ui/field";
import { Input } from "../ui/input";

export default function EnvioForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Crear un envio</CardTitle>
                <CardDescription>
                    Registra un nuevo envio
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend>Datos del cliente</FieldLegend>
                            <FieldDescription>
                            </FieldDescription>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="id">
                                        Id de cliente
                                    </FieldLabel>
                                    <Input id="id" type="text" placeholder="clienteId" required />
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                        <FieldSeparator />
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
                                        <Input id="ancho" type="number" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="alto">
                                            Alto
                                        </FieldLabel>
                                        <Input id="alto" type="number" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="largo">
                                            Largo
                                        </FieldLabel>
                                        <Input id="largo" type="number" placeholder="10" required />
                                    </Field>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="peso">
                                            Peso
                                        </FieldLabel>
                                        <Input id="peso" type="number" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="tarifa">
                                            Tarifa
                                        </FieldLabel>
                                        <Input id="tarifa" type="number" placeholder="10" required />
                                    </Field>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                        <FieldSeparator />
                        <FieldSet>
                            <FieldLegend>Direccion de origen del envio</FieldLegend>
                            <FieldDescription>
                            </FieldDescription>
                            <FieldGroup>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="calle">
                                            Calle
                                        </FieldLabel>
                                        <Input id="calle" type="text" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="numero">
                                            Numero
                                        </FieldLabel>
                                        <Input id="numero" type="text" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="ciudad">
                                            Ciudad
                                        </FieldLabel>
                                        <Input id="ciudad" type="text" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="codigoPostal">
                                            Codigo Postal
                                        </FieldLabel>
                                        <Input id="codigoPostal" type="text" placeholder="10" required />
                                    </Field>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                        <FieldSeparator />
                        <FieldSet>
                            <FieldLegend>Direccion de destino del envio</FieldLegend>
                            <FieldDescription>
                            </FieldDescription>
                            <FieldGroup>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="calle">
                                            Calle
                                        </FieldLabel>
                                        <Input id="calle" type="text" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="numero">
                                            Numero
                                        </FieldLabel>
                                        <Input id="numero" type="text" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="ciudad">
                                            Ciudad
                                        </FieldLabel>
                                        <Input id="ciudad" type="text" placeholder="10" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="codigoPostal">
                                            Codigo Postal
                                        </FieldLabel>
                                        <Input id="codigoPostal" type="text" placeholder="10" required />
                                    </Field>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                        <FieldGroup>
                            <Field>
                                <Button type="submit">
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