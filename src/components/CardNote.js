import { showFormattedDate } from "../utils";

const CardNote = ({ deleteNote, archiveNote, id, title, body, createdAt, archived, unArchivedNote }) => {
    return (
        <div className="card-note">
            <h3>{ title }</h3>
            <label>{ showFormattedDate(createdAt) }</label>
            <p>{ body }</p>

            <div>
                <button onClick={() => deleteNote(id)}>Hapus</button>
                <button onClick={() => archived ? unArchivedNote(id) : archiveNote(id)} style={{ backgroundColor: archived ? "#C21010" : "#2B7A0B" }}>{ archived ? "Aktifkan" : "Arsipkan" }</button>
            </div>
        </div>
    );
}

export default CardNote;