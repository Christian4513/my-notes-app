import React from "react";
import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {

    const noteList = [
        {
            id: 1,
            title: "Ir a la casa de mi amigo",
            marked: false
        },
        {
            id: 2,
            title: "Recordar comprar el pan",
            marked: false
        },
        {
            id: 3,
            title: "Serie: The Last Of Us",
            marked: false
        },
        {
            id: 4,
            title: "Hacer completos para la once",
            marked: false
        }
    ];
    const [notes, setNotes] = useState(noteList);

    const addNote = (newNote) => {
        setNotes([newNote, ...notes]);
    };

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id !== updatedNote.id) return note;
            return updatedNote;
        });
        setNotes(updatedNotes);

    };

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, updateNote  }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProviderWrapper };