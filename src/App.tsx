import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SimpleLayout from "./components/layout/SimpleLayout";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./components/pages/NotFound";
import EnviosTable from "./components/envio/EnviosTable";
import EnvioDetails from "./components/envio/EnvioDetails";
import RepartidoresTable from "./components/repartidor/RepartidoresTable";
import UsuarioFrom from "./components/usuario/UsuarioFrom";
import EnvioForm from "./components/envio/EnvioForm";
import Home from "./components/pages/Home";
import UsuarioDetails from "./components/usuario/UsuarioDetails";
import ProtectedRoutes from "./components/pages/ProtectedRoutes";
import InvalidRoutes from "./components/pages/InvalidRoutes";
import RepartidorForm from "./components/repartidor/RepartidorForm";
import RepartidorDetails from "./components/repartidor/RepartidorDetails";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "/perfil", element: <UsuarioDetails /> },
        ],
      },
      {
        element: <ProtectedRoutes roles={["ADMIN"]} />,
        children: [
          { path: "/envios", element: <EnviosTable /> },
          { path: "/repartidores", element: <RepartidoresTable /> },
          { path: "/usuarioForm", element: <UsuarioFrom /> },
          { path: "/repartidorForm", element: <RepartidorForm /> },
          { path: "/repartidor/:id", element: <RepartidorDetails /> },
        ],
      },
      {
        element: <ProtectedRoutes roles={["CLIENTE", "ADMIN"]} />,
        children: [
          { path: "/envioForm", element: <EnvioForm /> },
          { path: "/envio/:id", element: <EnvioDetails /> },
        ],
      },
    ],
  },
  {
    element: <SimpleLayout />,
    children: [
      {
        element: <InvalidRoutes />,
        children: [
          { path: "/login", element: <LoginForm /> },
          { path: "/register", element: <RegisterForm /> },
        ],
      },
      { path: "*", element: <NotFound /> }
    ]
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}