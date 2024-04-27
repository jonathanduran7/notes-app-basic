import { useState } from "react";
import { Note } from "../page";

export const UseNotes = () => {
    const [notes, setNotes] = useState<Note[]>([])

    const addNote = (note: Omit<Note, "id">) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newNote = { ...note, id }
        setNotes([...notes, newNote])
    }

    return { notes, addNote }

}