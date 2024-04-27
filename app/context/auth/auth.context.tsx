import { createContext } from "react";

export interface IUser {
    email: string;
    name: string;
}

interface IAuthContext {
    user: IUser | null
    login: (email: string, password: string) => void
    logout: () => void
}

export const AuthContext = createContext({} as IAuthContext)