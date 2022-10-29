import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => {
      return note.id === activeNote;
    });
  };

  const onUpdateNote = (updatedNote) => {
    const updateNotesArray = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updateNotesArray);
  };
  useEffect(() => {
    const jsonNotes = JSON.stringify(notes);
    localStorage.setItem("notes", jsonNotes);
  }, [notes]);

  useEffect(() => {
    if (notes.length !== 0) setActiveNote(notes[0].id);
  }, []);

  return (
    <div className="App">
      <SideBar
        onAddNote={onAddNote}
        notes={notes}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      ></SideBar>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}></Main>
    </div>
  );
}

export default App;
