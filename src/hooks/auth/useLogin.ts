import { useAppContext } from "../useAppContext"
import { loginMethod } from "../../services/auth-services"
import { toast } from "../../components/ui/toast"
import { AxiosError } from "axios"

export function useLogin() {

    const { login } = useAppContext()

    const loginUser = async (username: string, password: string) => {
        try {
            const { data } = await loginMethod(username, password)
            login(data.accessToken)
            toast.add({type: "success", description: "Bienvenido"})
        } catch (error) {
            if (error instanceof AxiosError) toast.add({type: "error", description: error.response?.data.message})
        }
    }

    return { loginUser }

}