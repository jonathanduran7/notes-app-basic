import { useEffect, useState } from "react";
import { Note } from "../page";

export const UseNotes = () => {
    const [notes, setNotes] = useState<Note[]>([])

    const addNote = (note: Omit<Note, "id">) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newNote = { ...note, id }
        localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
        setNotes([...notes, newNote])
    }

    const getNotes = () => {
        const notes = localStorage.getItem('notes')
        if (notes) {
            setNotes(JSON.parse(notes))
        }
    }

    useEffect(() => {
        getNotes()
    }, [])

    return { notes, addNote }

}