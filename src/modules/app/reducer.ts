import { createReducer } from "@reduxjs/toolkit";
import { AppInitialState } from "../../types/app";
import * as actions from "./actions";

export const initialState: AppInitialState = {
  fetching: true,
  loading: false,
  number: 0,
  currentInputNumber: "",
  users: [],
};

const appReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.start, (state) => {
      state.loading = true;
    })
    .addCase(actions.updateInput, (state, action) => {
      state.currentInputNumber = action.payload;
    })
    .addCase(actions.add, (state, action) => {
      state.number += action.payload;
      state.loading = false;
    })
    .addCase(actions.startFetching, (state) => {
      state.fetching = true;
    })
    .addCase(actions.fetchUsers, (state, action) => {
      state.users = action.payload;
      state.fetching = false;
    })
);

export default appReducer;
