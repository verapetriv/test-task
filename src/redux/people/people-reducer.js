import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPeopleSuccess,
  fetchPeopleError,
  changeName,
  changeLastname,
  changeAge,
  changeSex,
} from "./people-actions";

const listOfPeople = createReducer([], {
  [fetchPeopleSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchPeopleError]: (_, { payload }) => payload,
});

const name = createReducer("", {
  [changeName]: (_, { payload }) => payload,
});

const lastname = createReducer("", {
  [changeLastname]: (_, { payload }) => payload,
});

const age = createReducer("", {
  [changeAge]: (_, { payload }) => payload,
});

const sex = createReducer(
  { m: false, f: false },
  {
    [changeSex]: (state, { payload }) => ({
      ...state,
      [payload]: !state[payload],
    }),
  }
);

const filterOptions = combineReducers({
  name,
  lastname,
  age,
  sex,
});

export default combineReducers({
  listOfPeople,
  filterOptions,
  error,
});
