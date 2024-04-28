import { INote } from "../context/notes/notes.context"

export const getNotesByUser = (notes: INote[], userEmail: string) => {
    return notes.filter(note => note.user === userEmail)
}

export const getNoteById = (notes: INote[], id: string) => {
    return notes.find(note => note.id === id)
}

export const getAllNotes = (notes: INote[]) => {
    return notes
}