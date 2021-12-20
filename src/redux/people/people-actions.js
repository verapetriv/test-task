import { createAction } from "@reduxjs/toolkit";

export const fetchPeopleSuccess = createAction("people/fetchPeopleSuccess");
export const fetchPeopleError = createAction("people/fetchPeopleError");

export const changeName = createAction("people/changeName");
export const changeLastname = createAction("people/changeLastname");
export const changeAge = createAction("people/changeAge");
export const changeSex = createAction("people/changeSex");
