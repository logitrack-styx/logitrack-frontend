import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function Home() {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                    <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
                        Logitrack - Styx
                    </h1>
                    <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
                        LogiTrack es una plataforma de logística integral orientada a la gestión y seguimiento de envíos para comercios electrónicos y entregas de última milla.
                    </p>
                    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                        {/* <Button
                        size="lg"
                        className="w-full sm:w-auto"
                        >
                            <Link to={"/login"}>
                                Iniciar Sesion
                            </Link>
                            <ArrowRight className="size-4" />
                        </Button>
                        <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto"
                        >
                            <Link to={"/register"}>
                                Registrarse
                            </Link>
                        </Button> */}
                    </div>
                </div>
                    {/* <img
                    src=""
                    alt=""
                    className="aspect-video w-full rounded-md border border-border object-cover object-top"
                    /> */}
                </div>
            </div>
            </section>
    )
}