import { useNavigate } from "react-router"
import { registerMethod } from "../../services/auth-services"
import { toast } from "../../components/ui/toast"
import { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"
import type { RegisterForm } from "../../types/auth-types"

export function useRegister() {

    const navigate = useNavigate()

    // const registerUser = async (username: string, email: string, password: string) => {
    //     try {
    //         await registerMethod(username, email, password)
    //         toast.add({type: "success", title: "Usuario creado correctamente", description: "Por favor inicie sesion"})
    //         navigate("/login")
    //     } catch (error) {
    //         if (error instanceof AxiosError) toast.add({type: "error", description: error.response?.data.message})
    //     }
    // }

    // return { registerUser }

    return useMutation({
        mutationFn: async (body: RegisterForm) => (await registerMethod(body)).data,
        onSuccess: () => {
            toast.add({ type: "success", title: "Usuario creado correctamente", description: "Por favor inicie sesión",})
            navigate("/login")
        },
    })
    
}