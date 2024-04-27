import React, { useEffect, useState } from "react";
import { INote, NoteContext } from "./notes.context";
import { sweetAlert, sweetAlertWarning } from "@/app/services/sweet-alert.service";
interface Props {
    children: React.ReactNode
}

export const NotesProvider = ({ children }: Props) => {

    const [notes, setNotes] = useState<INote[]>([]);
    const [currentNote, setCurrentNote] = useState<INote>({ id: '', title: '', content: '' });

    const addNote = (note: Omit<INote, "id">) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newNote = { ...note, id }
        localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
        setNotes([...notes, newNote])
        setCurrentNote({ id: '', title: '', content: '' })
        sweetAlert('success', 'Note added')
    }

    const getNotes = () => {
        const notes = localStorage.getItem('notes')
        if (notes) {
            setNotes(JSON.parse(notes))
        }
    }

    const deleteNote = async (id: string) => {
        const alert = await sweetAlertWarning('Are you sure?', 'You will not be able to recover this note!');
        if (alert.isConfirmed) {
            const newNotes = notes.filter(note => note.id !== id)
            localStorage.setItem('notes', JSON.stringify(newNotes))
            setNotes(newNotes)
            sweetAlert('success', 'Note deleted')
        }
    }

    const editNote = (id: string, noteUpdate: Omit<INote, "id">) => {
        const newNotes = notes.map(note => note.id === id ? { ...note, ...noteUpdate } : note)
        localStorage.setItem('notes', JSON.stringify(newNotes))
        setNotes(newNotes)
        setCurrentNote({ id: '', title: '', content: '' })
        sweetAlert('success', 'Note edited')
    }

    const selectNote = (id: string) => {
        const note = notes.find(note => note.id === id)
        if (!note) return
        setCurrentNote(note)
    }

    useEffect(() => { getNotes() }, [])

    return (
        <NoteContext.Provider value={{
            notes,
            addNote,
            deleteNote,
            editNote,
            currentNote,
            selectNote
        }}>
            {children}
        </NoteContext.Provider>
    )
}