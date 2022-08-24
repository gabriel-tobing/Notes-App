import React from "react";

import { getInitialData } from "../utils";

import Navbar from "./Navbar";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            inputSearch: "",
            formValue: {
                id: "",
                title: "",
                body: "",
                archived: false,
                createdAt: "",
            }
        }

        this.deleteNoteHandle = this.deleteNoteHandle.bind(this);
        this.archiveNoteHandle = this.archiveNoteHandle.bind(this);
        this.unArchiveNoteHandle = this.unArchiveNoteHandle.bind(this);
        this.searchNoteHandle = this.searchNoteHandle.bind(this);
        this.addNewNoteHandle = this.addNewNoteHandle.bind(this);
        this.onTitleHandle = this.onTitleHandle.bind(this);
        this.onBodyHandle = this.onBodyHandle.bind(this);
    }

    deleteNoteHandle(id) {
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: this.state.notes.filter(note => note.id !== id),
            }
        });
    }

    archiveNoteHandle(id) {
        let note = this.state.notes.filter(note => note.id === id);
        note[0].archived = true;

        let newNote = this.state.notes.filter(note => note.id !== id);

        this.setState((prevState) => {
            return {
                ...prevState,
                notes: [
                    ...newNote,
                    note[0],
                ]
            }
        });
    }

    unArchiveNoteHandle(id) {
        let note = this.state.notes.filter(note => note.id === id);
        note[0].archived = false;

        let newNote = this.state.notes.filter(note => note.id !== id);

        this.setState((prevState) => {
            return {
                ...prevState,
                notes: [
                    ...newNote,
                    note[0],
                ]
            }
        });
    }

    searchNoteHandle(value) {
        this.setState((prevState) => {
            return {
                ...prevState,
                inputSearch: value,
            }
        });
    }

    addNewNoteHandle(e) {
        e.preventDefault();

        let newState = this.state.notes;

        newState.push({
            id: +new Date(),
            title: this.state.formValue.title,
            body: this.state.formValue.body,
            archived: this.state.formValue.archived,
            createdAt: new Date().toISOString().slice(0, 10),
        });

        this .setState((prevState) => {
            return {
                ...prevState,
                notes: newState,
                formValue: {
                    id: "",
                    title: "",
                    body: "",
                    archived: false,
                    createdAt: "",
                }
            }
        });
    }

    onTitleHandle(value) {
        if(value.length > 50) {
            return false;
        }

        this.setState((prevState) => {
            return {
                ...prevState,
                formValue: {
                    ...prevState.formValue,
                    title: value,
                }
            }
        });
    }

    onBodyHandle(value) {
        this.setState((prevState) => {
            return {
                ...prevState,
                formValue: {
                    ...prevState.formValue,
                    body: value,
                }
            }
        });
    }

    render() {
        return (
            <div className="main">
                <Navbar searchNote={ this.searchNoteHandle } />
                <NewNote addNewNoteHandle={ this.addNewNoteHandle } formValue={ this.state.formValue } onTitleHandle={ this.onTitleHandle } onBodyHandle={ this.onBodyHandle } />
                <NoteList notes={ this.state.notes } deleteNote={ this.deleteNoteHandle } archivedNote={ this.archiveNoteHandle } unArchiveNote={ this.unArchiveNoteHandle } inputSearch={ this.state.inputSearch } />
            </div>
        )
    }
}

export default NotesApp;