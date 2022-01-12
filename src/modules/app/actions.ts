import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from './actionTypes'

export const start = createAction(actionTypes.START)
export const add = createAction(actionTypes.ADD)