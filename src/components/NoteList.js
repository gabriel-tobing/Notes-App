import ActiveNote from "./ActiveNote";
import ArchivedNote from "./ArchivedNote";

const NoteList = ({ notes, deleteNote, archivedNote, unArchiveNote, inputSearch }) => {
    return (
        <div className="note-list">
            <ActiveNote notes={ notes } deleteNote={ deleteNote } archivedNote={ archivedNote } inputSearch={ inputSearch } />
            <ArchivedNote notes={ notes } deleteNote={ deleteNote } unArchiveNote={ unArchiveNote } inputSearch={ inputSearch } />
        </div>
    );
}

export default NoteList;