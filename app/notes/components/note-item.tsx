import { Note } from "../page"

interface Props {
    note: Note
}

export const NoteItem = ({ note }: Props) => {

    return (
        <div className="border border-gray-200 p-3 mb-2">
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p>{note.content}</p>
        </div>
    )
}
