import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query"
import { toast } from "../components/ui/toast"
import { getErrorMessage } from "../helpers/get-error-message"

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => toast.add({ type: "error", description: getErrorMessage(error) })
    }),
    mutationCache: new MutationCache({
        onError: (error) => toast.add({ type: "error", description: getErrorMessage(error) })
    }),
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 30_000
        }
    }
})