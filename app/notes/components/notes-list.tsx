import { Note } from "../page"
import { EmptyList } from "./empty-notes"
import { NoteItem } from "./note-item"

interface Props {
    notes: Note[]
}

export const NotesList = ({ notes }: Props) => {

    if (!notes.length) return <EmptyList />

    return (
        <div className="flex-grow p-5">
            {notes.map((note) => <NoteItem key={note.id} note={note} />)}
        </div>
    )
} 