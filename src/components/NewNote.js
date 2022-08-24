import React from "react";

const NewNote = ({ addNewNoteHandle, formValue, onTitleHandle, onBodyHandle }) => {
    return (
        <div className="new-note">
            <h2>Buat Catatan Baru</h2>

            <form onSubmit={ addNewNoteHandle }>
                <div className="form-add">
                    <p>Sisa karakter: { 50 - (formValue.title).length }</p>
                    <input type="text" placeholder="Masukkan judul catatan" value={ formValue.title } onChange={(event) => onTitleHandle(event.target.value)} required />
                    <textarea cols="50" rows="10" placeholder="Tulis catatan" value={ formValue.body } onChange={(event) => onBodyHandle(event.target.value)}></textarea>

                    <button>Buat Catatan</button>
                </div>
            </form>
        </div>
    );
}

export default NewNote;