"use client"

import { AuthContext } from "@/app/context/auth/auth.context"
import { useContext } from "react"

export default function Navbar() {
    const { logout, user } = useContext(AuthContext)

    return (
        <nav
            className="flex justify-between items-center p-4 bg-gray-800 text-white"
        >
            <div>NOTES APP</div>
            <div className="flex items-center gap-2">
                <div>
                    <span className="mr-2">{user?.email}</span>
                </div>
                <button
                    className="px-2 py-1 bg-gray-700 text-white rounded-md"
                    onClick={() => logout()}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}