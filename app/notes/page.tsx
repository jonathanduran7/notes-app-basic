"use client"

import PrivateRoutes from "@/app/components/private-routes"
import { FormNotes, NotesList } from './components'
import { UseNotes } from "./hooks"

export interface Note {
    id: string
    title: string
    content: string
}

const Notes = () => {
    const { addNote, notes } = UseNotes()

    return (
        <div className="min-h-screen flex">
            <div className="p-5">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-7">Notes</h1>
                </div>
                <FormNotes addNote={addNote} />
            </div>

            <NotesList notes={notes} />
        </div>
    )
}

export default PrivateRoutes(Notes)