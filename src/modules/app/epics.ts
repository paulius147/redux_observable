import { combineEpics, Epic, ofType } from "redux-observable";
import { map, debounceTime, switchMap } from "rxjs";
import { add, fetchUsers, updateInput } from "./actions";
import * as actionTypes from "./actionTypes";
import axios from "axios";
import { User } from "../../types/app";

const addAfterDelayEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.START),
    debounceTime(3000),
    map(() => add(Number(state$.value.app.currentInputNumber)))
  );

const fetchUsersEpic: Epic = (action$) =>
  action$.pipe(
    ofType(actionTypes.START_FETCHING),
    switchMap(async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users: User[] = [];
      response.data.map((user: typeof response.data[0]) => {
        users.push({
          name: user.name,
          username: user.username,
          email: user.email,
        });
      });
      return fetchUsers(users);
    })
  );

// const addNumber: Epic = (action$) =>
//   action$.pipe(
//     ofType(actionTypes.ADD),
//     delay(2000),
//     map(() => updateInput(""))
//   );

export default combineEpics(addAfterDelayEpic, fetchUsersEpic);

// map(() => fetchUsers([{ name: "dsad", username: "dsads", email: "dsad" }]))
// map(async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const users: User[] = [];
//   response.data.map((user: typeof response.data[0]) => {
//     users.push({
//       name: user.name,
//       username: user.username,
//       email: user.email,
//     });
//   });
//   fetchUsers(users);
// })
// switchMap(() => {
//   const response = axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(response);
// })
