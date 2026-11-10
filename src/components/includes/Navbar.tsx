import { Menu } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Accordion } from "../ui/accordion";
import { Link, NavLink, useNavigate } from "react-router";
import { useAppContext } from "../../hooks/useAppContext";
import { useRoles } from "../../hooks/useRoles";
import type { Role } from "../../types/usuario-types";

interface NavRoute {
  url: string
  title: string
  roles?: Role[]
}

const routes: NavRoute[] = [
  { url: "/", title: "Inicio" },
  { url: "/envios", title: "Envios", roles: ["ADMIN"] },
  { url: "/repartidores", title: "Repartidores", roles: ["ADMIN"] },
  { url: "/usuarioForm", title: "Crear Usuario", roles: ["ADMIN"] },
  { url: "/envioForm", title: "Crear Envio", roles: ["ADMIN", "CLIENTE"] }
]

export default function Navbar() {

  const navigate = useNavigate()
  const isAuthenticated = useAppContext((s) => s.isAuthenticated)
  const logout = useAppContext((s) => s.logout)
  
  const roles = useRoles()

  const visibleRoutes = routes.filter(
    (route) => !route.roles || route.roles.some((r) => roles.includes(r))
  )

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const AuthButtons = () =>
    isAuthenticated ? (
      <>
        <Button variant="outline" size="sm">
          <Link to="/usuario">Ver Perfil</Link>
        </Button>
        <Button variant="destructive" size="sm" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </>
    ) : (
      <>
        <Button variant="outline" size="sm">
          <Link to="/login">Iniciar Sesión</Link>
        </Button>
        <Button size="sm">
          <Link to="/register">Registrarse</Link>
        </Button>
      </>
    )

  return (
    <section className="border-b py-4">
      <div className="w-full px-6">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={"/"} className="flex items-center gap-2">
              <img
                src=""
                className="max-h-8 dark:invert"
                alt=""
              />
              <span className="text-lg font-semibold tracking-tighter">
                Logitrack - Styx
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Items Desktop Menu */}
                  {visibleRoutes.map((route) => (
                    <NavigationMenuItem>
                      <NavLink to={route.url}>
                        <NavigationMenuLink
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
                        >
                          {route.title}
                        </NavigationMenuLink>
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {/* Auth Desktop */}
            <AuthButtons />
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={"/"}>
              <img
                src=""
                className="max-h-8 dark:invert"
                alt=""
              />
            </Link>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon" />}>
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href="" className="flex items-center gap-2">
                      <img
                        src=""
                        className="max-h-8 dark:invert"
                        alt=""
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion className="flex w-full flex-col gap-4">
                    {/* Items Mobile Menu */}
                    {visibleRoutes.map((route) => (
                      <NavLink to={route.url} className="text-md font-semibold">
                        {route.title}
                      </NavLink>
                    ))}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    {/* Auth Mobile */}
                    <AuthButtons />
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}

