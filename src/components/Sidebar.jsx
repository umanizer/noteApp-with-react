import React from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { onAddNote, sortNotes, deleteNote } from "../store/modules/notes";

const Sidebar = ({ activeNote, setActiveNote }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  dispatch(sortNotes());

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={() => dispatch(onAddNote())}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => dispatch(deleteNote(note.id))}>
                削除
              </button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
