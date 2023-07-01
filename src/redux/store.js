import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./display/displaySlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});
