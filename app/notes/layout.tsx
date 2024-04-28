"use client"

import { NotesProvider } from "../context/notes/notes.provider";
import PrivateRoutes from "../components/private-routes";
import Navbar from "./components/navbar";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NotesProvider>
            <div className="overflow-hidden h-full">
                <Navbar />
                {children}
            </div>
        </NotesProvider>
    )
}

export default PrivateRoutes(Layout)