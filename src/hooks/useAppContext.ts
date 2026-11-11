import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { queryClient } from '../config/query-client';

type Store = {
    token: string | null,
    isAuthenticated: boolean,
    login: (token: string) => void,
    logout: () => void
}

export const useAppContext = create<Store>()(
    persist(
        (set) => ({
            token: null,
            isAuthenticated: false,
            login: (token) => {
                set({ token, isAuthenticated: true })
            },
            logout: () => {
                localStorage.removeItem("token")
                queryClient.clear()
                set({ token: null, isAuthenticated: false })
            }
        }),
        {
            name: "token",
            partialize: (state) => ({ token: state.token })
        }
    )
)