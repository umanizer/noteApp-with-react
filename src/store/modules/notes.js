import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const notes = createSlice({
  name: "notes",
  initialState: JSON.parse(localStorage.getItem("notes")) ||[],
  reducers: {
    onAddNote(state) {
      const newNote = {
        id: uuid(),
        title: "新しいノート",
        content: "",
        modDate: Date.now(),
      };
      return [...state, newNote];
    },
    sortNotes(state) {
      return state.sort((a, b) => b.modDate - a.modDate);
    },
    deleteNote(state, action) {
      return state.filter((note) => {
        return note.id !== action.payload;
      });
    },
    onUpdateNote(state, action) {
      return state.map((note) => (note.id === action.payload.id ? action.payload : note));
    },
  },
});
const { onAddNote, sortNotes, deleteNote, onUpdateNote } = notes.actions;
export { onAddNote, sortNotes, deleteNote, onUpdateNote };

export default notes.reducer;
