import { useNotes } from "../hooks"
import { EmptyList } from "./empty-notes"
import { NoteItem } from "./note-item"

export const NotesList = () => {

    const { notes } = useNotes()

    if (!notes.length) return <EmptyList />

    return (
        <div className="flex-grow p-5 overflow-y-auto h-screen pb-20">
            {notes.map((note) => <NoteItem key={note.id} note={note}  />)}
        </div>
    )
} 