"use client"
import PrivateRoutes from "@/app/components/private-routes"
import { FormNotes, NotesList } from './components'

export interface Note {
    id: string
    title: string
    content: string
}

const Notes = () => {
    return (
        <div className="min-h-screen flex">
            <div className="p-5">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-7">Notes</h1>
                </div>
                <FormNotes />
            </div>

            <NotesList />
        </div>
    )
}

export default Notes