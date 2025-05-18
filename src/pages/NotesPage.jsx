
import HeaderComponent from './../components/HeaderComponent.jsx';
import { NoteContext } from "../context/note.context";
import { useContext } from "react";
import NoteCard from "../components/NoteCard.jsx";
import "./NotesPage.css";




function NotesPage() {
  const { notes } = useContext(NoteContext);

  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    );
  }

  );
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section className="notes-page">
        <h2>Notes</h2>
        <ul className="note-list">{noteCards}</ul>
      </section>
    </>
  );
}

export default NotesPage;