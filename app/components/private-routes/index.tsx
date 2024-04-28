"use client"

import { AuthContext } from "@/app/context/auth/auth.context"
import { redirect } from "next/navigation"
import { useContext, useEffect } from "react"


export default function PrivateRoutes(Component: any) {
    return function PrivateRoute(props: any) {
        const { user } = useContext(AuthContext)

        useEffect(() => {
            const user = localStorage.getItem('user')
            if (!user) {
                redirect('/login')
            }
        }, [user])

        if (!user) return null

        return <Component {...props} />
    }
}