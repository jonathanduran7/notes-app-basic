import { useState } from "react"
import { AuthContext, IUser } from "./auth.context"

interface IAuthProvider {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>(null)

    const login = (email: string, password: string) => { }

    const logout = () => { }

    return (
        <AuthContext.Provider value={{ login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}