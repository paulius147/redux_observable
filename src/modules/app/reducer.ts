import { createReducer } from "@reduxjs/toolkit";
import { AppInitialState } from "../../types/app";
import * as actions from './actions'

export const initialState: AppInitialState = {
    loading: false,
    number: 0,
}

const appReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(actions.add, (state, action) => {
            state.number = action.payload
        })
)

export default appReducer