import { createContext } from "react";

export interface INote {
    id: string
    title: string
    content: string
    user: string
}

interface INoteContext {
    notes: INote[]
    currentNote: INote
    addNote: (note: Omit<INote, "id">) => void
    deleteNote: (id: string) => void
    editNote: (id: string, noteUpdate: Omit<INote, "id">) => void
    selectNote: (id: string) => void
}

export const NoteContext = createContext({} as INoteContext)