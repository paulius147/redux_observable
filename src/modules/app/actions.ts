import { createAction } from "@reduxjs/toolkit";
import { User } from "../../types/app";
import * as actionTypes from "./actionTypes";

export const start = createAction(actionTypes.START);
export const updateInput = createAction<string>(actionTypes.UPDATE_INPUT);
export const add = createAction<number>(actionTypes.ADD);
export const startFetching = createAction(actionTypes.START_FETCHING);
export const fetchUsers = createAction<User[]>(actionTypes.FETCH_USERS);
