import { useState } from "react"
import { AuthContext, IUser } from "./auth.context"
import { useRouter } from "next/navigation"

interface IAuthProvider {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {

    const { push } = useRouter();

    const [user, setUser] = useState<IUser | null>(null)

    const login = (email: string, password: string) => {
        const validUser = {
            email: 'admin@gmail.com',
            password: 'admin123'
        }

        if (email === validUser.email && password === validUser.password) {
            alert('Login success');
            setUser({ email: email, name: 'Admin' });
            push('/notes');
        } else {
            alert('Login failed');
        }
    }

    const logout = () => { 
        setUser(null);
        push('/login');
    }

    return (
        <AuthContext.Provider value={{ login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}