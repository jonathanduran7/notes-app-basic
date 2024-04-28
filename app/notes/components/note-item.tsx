import { useContext, useEffect, useState } from "react"
import { useNotes } from "../hooks"
import { INote } from "@/app/context/notes/notes.context"
import { AuthContext } from "@/app/context/auth/auth.context"

interface Props {
    note: INote
}

export const NoteItem = ({ note }: Props) => {

    const { user } = useContext(AuthContext)
    const [isNoteSelected, setIsNoteSelected] = useState(false)
    const { deleteNote, selectNote, currentNote } = useNotes()

    useEffect(() => {
        if (currentNote.id === note.id) {
            setIsNoteSelected(true)
        } else {
            setIsNoteSelected(false)
        }
    }, [currentNote, note])

    return (
        <div className={`border border-gray-200 p-3 mb-2 flex justify-between ${isNoteSelected && 'bg-gray-200'}`}>
            <div>
                <h3 className="text-lg font-bold uppercase">{note.title}</h3>
                {
                    user?.role === 'admin' && (
                        <p className="text-xs text-gray-400">{note?.user}</p>
                    )
                }
                <p>{note.content}</p>
            </div>
            <div className="flex gap-2">
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                    disabled={isNoteSelected}
                    onClick={() => deleteNote(note.id)}
                >
                    Delete
                </button>

                <button
                    className="bg-blue-400 text-white px-3 py-1 rounded mt-2"
                    onClick={() => selectNote(note.id)}
                >
                    Edit
                </button>
            </div>
        </div>
    )
}
