import { combineEpics, Epic, ofType } from "redux-observable";
import { delay } from "rxjs";
import * as actionTypes from './actionTypes'

const addAfterDelayEpic: Epic = (action$) =>
    action$.pipe(
        ofType(actionTypes.START),
        delay(3000),
        ofType(actionTypes.ADD)
    );

export default combineEpics(addAfterDelayEpic)