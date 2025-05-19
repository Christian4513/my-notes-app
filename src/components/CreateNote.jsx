import "./CreateNote.css";
import { useState, useContext } from "react";
import { NoteContext } from "../context/note.context";

function CreateNote() {
    const {addNote} = useContext(NoteContext);

    const [noteTitle, setNoteTitle] = useState("");

    const handleInput = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!noteTitle) return;

        const newNote = {
            id: Date.now(),
            title: noteTitle,
            marked: false
        };

        addNote(newNote);
        setNoteTitle("");
    };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
        <input
         type="text" 
         className="note-title" 
         placeholder="Nueva Nota" 
         value={noteTitle}
         onChange={handleInput}/>
         <button className="create-btn">+</button>
    </form>
  );
}

export default CreateNote;