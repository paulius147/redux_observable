import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { reducer as app } from "./app/app";

const createRootReducer = (): Reducer =>
  combineReducers({
    app,
  });

export default createRootReducer;
