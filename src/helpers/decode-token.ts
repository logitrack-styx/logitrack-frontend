import { jwtDecode, type JwtPayload } from "jwt-decode";
import type { Role } from "../types/usuario-types";



interface LogiTrackPayload extends JwtPayload {
    iss: string
    sub: string
    exp: number
    iat: number
    roles: Role[]
}

export const decodedToken = ((token: string) => {
    if (token) {
        const claims = jwtDecode<LogiTrackPayload>(token)
        if (claims.exp) {
            if (claims.exp * 1000 >= Date.now()) {
                return claims
            }
        }    
    }
    return null
})