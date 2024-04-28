import { use, useEffect, useState } from "react"
import { AuthContext, IUser } from "./auth.context"
import { redirect, useRouter } from "next/navigation"

interface IAuthProvider {
    children: React.ReactNode
}

const usersValid = [
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' },
    { email: 'joni@gmail.com', password: '123456', role: 'user' }
]

export const AuthProvider = ({ children }: IAuthProvider) => {

    const { push } = useRouter();

    const [user, setUser] = useState<IUser | null>(null)

    const login = (email: string, password: string) => {
        const validUser = usersValid.find(user => user.email === email);

        if (email === validUser?.email && password === validUser?.password) {
            setUser({ email: email, name: 'Admin', role: validUser?.role });
            localStorage.setItem('user', JSON.stringify({ email: email, name: 'Admin', role: validUser?.role }));
            push('/notes');
        } else {
            alert('Login failed');
        }
    }

    const logout = () => {
        setUser(null);
        push('/login');
        localStorage.removeItem('user');
    }

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}