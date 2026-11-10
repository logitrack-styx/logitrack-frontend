import { Link } from "react-router";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "../ui/empty";

export default function NotFound() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>
                    Página No Encontrada
                </EmptyTitle>
                <EmptyDescription>
                    La página que buscas no existe.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <EmptyDescription>
                    Ir a <Link to={'/'}>Inicio</Link>
                </EmptyDescription>
            </EmptyContent>
        </Empty>
    )
}