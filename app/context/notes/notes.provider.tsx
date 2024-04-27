import React, { useEffect, useState } from "react";
import { INote, NoteContext } from "./notes.context";

interface Props {
    children: React.ReactNode
}

export const NotesProvider = ({ children }: Props) => {

    const [notes, setNotes] = useState<INote[]>([]);

    const addNote = (note: Omit<INote, "id">) => {
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

    const deleteNote = (id: string) => {
        const newNotes = notes.filter(note => note.id !== id)
        localStorage.setItem('notes', JSON.stringify(newNotes))
        setNotes(newNotes)
    }

    const editNote = (id: string) => {}

    useEffect(() => { getNotes() }, [])

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote}}>
            {children}
        </NoteContext.Provider>
    )
}