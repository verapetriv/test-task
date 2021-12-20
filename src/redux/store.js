import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./people/people-reducer";

const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;