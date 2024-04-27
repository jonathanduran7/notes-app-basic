"use client"

import { useContext } from "react";
import { NotesProvider } from "../context/notes/notes.provider";
import { AuthContext } from "../context/auth/auth.context";
import PrivateRoutes from "../components/private-routes";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { logout } = useContext(AuthContext)

    return (
        <NotesProvider>
            <div>
                <nav
                    className="flex justify-between items-center p-4 bg-gray-800 text-white"
                >
                    <div>NOTES APP</div>
                    <div>
                        <button
                            className="px-2 py-1 bg-gray-700 text-white rounded-md"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    </div>
                </nav>
                {children}
            </div>
        </NotesProvider>
    )
}

export default PrivateRoutes(Layout)