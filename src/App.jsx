import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
  const notes = useSelector((state) => state.notes);
  const [activeNote, setActiveNote] = useState(false);

  const getActiveNote = () => {
    return notes.find((note) => {
      return note.id === activeNote;
    });
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
      <SideBar activeNote={activeNote} setActiveNote={setActiveNote}></SideBar>
      <Main activeNote={getActiveNote()} ></Main>
    </div>
  );
}

export default App;
