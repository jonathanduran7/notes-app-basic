import { createContext } from "react";

export interface INote {
    id: string
    title: string
    content: string
}

interface INoteContext {
    notes: INote[]
    addNote: (note: Omit<INote, "id">) => void
    deleteNote: (id: string) => void
    editNote: (id: string) => void
}

export const NoteContext = createContext({} as INoteContext)