import { useNotes } from "../hooks"
import { Note } from "../page"
import { EmptyList } from "./empty-notes"
import { NoteItem } from "./note-item"

export const NotesList = () => {

    const { notes } = useNotes()

    if (!notes.length) return <EmptyList />

    return (
        <div className="flex-grow p-5">
            {notes.map((note) => <NoteItem key={note.id} note={note}  />)}
        </div>
    )
} 