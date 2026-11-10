import { create } from 'zustand'
import { decodedToken } from '../helpers/decode-token';

type Store = {
    token: string | null,
    isAuthenticated: boolean,
    login: (token: string) => void,
    logout: () => void
}

const getInitialToken = (): string | null => {
    const token = localStorage.getItem("token");
    return token && decodedToken(token) ? token : null;
};

const initialToken = getInitialToken();

export const useAppContext = create<Store>()((set) => ({
        token: initialToken,
        isAuthenticated: !!initialToken,
        login: (token) => {
            localStorage.setItem("token", token);
            set({ token, isAuthenticated: true })
        },
        logout: () => {
            localStorage.removeItem('token')
            set({ token: null, isAuthenticated: false })
        },
    })
)