import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/notes"

export default configureStore({
  reducer: {
    notes: reducer,
  },
});
