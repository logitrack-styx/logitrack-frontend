import { Monitor, Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ModeToggle() {

    const { theme, setTheme } = useTheme()

    const renderIcon = () => {
        if (theme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />
        if (theme === "light") return <Sun className="h-[1.2rem] w-[1.2rem]" />
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline" size="icon">
                    { renderIcon() }
                    <span className="sr-only">Cambiar tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="h-4 w-4" />
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="h-4 w-4" />
                    Oscuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Monitor className="h-4 w-4" />
                    Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}