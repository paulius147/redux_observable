import React from "react";
import "./App.css";
import { useAppSelector } from "./modules";
import {
  getAppNumber,
  getAppUsers,
  getCurentInputNumber,
} from "./modules/app/selectors";
import { useDispatch } from "react-redux";
import * as actions from "./modules/app/actions";

const App = () => {
  const dispatch = useDispatch();
  const { number } = useAppSelector((state) => ({
    number: getAppNumber(state),
  }));
  const { currentInputNumber } = useAppSelector((state) => ({
    currentInputNumber: getCurentInputNumber(state),
  }));
  const { users } = useAppSelector((state) => ({
    users: getAppUsers(state),
  }));

  return (
    <div className="App">
      <div>
        <span>Your current number: {number} </span>
        <input
          type="text"
          value={currentInputNumber}
          onChange={(e) => {
            dispatch(actions.updateInput(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(actions.start());
          }}
        >
          Add after 3 seconds
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(actions.startFetching())}>
          Fetch Users
        </button>
        <ul>
          {users.map((user) => {
            return (
              <li>
                Name: {user.name}
                <br />
                Username: {user.username}
                <br />
                Email: {user.email}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
