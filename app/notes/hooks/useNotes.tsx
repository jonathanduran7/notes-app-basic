import { useContext } from "react";
import { NoteContext } from "@/app/context/notes/notes.context";

export const useNotes = () => {
    return useContext(NoteContext)
}