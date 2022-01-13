import { applyMiddleware, createStore, Store } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import createRootReducer from "./rootReducer";
import rootEpics from "./rootEpics";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { MainState } from "../types";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  createRootReducer(),
  {},
  composeEnhancers(applyMiddleware(epicMiddleware))
);

interface ConfigureStoreInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store: Store<any, any>;
}

export function configureStore(): ConfigureStoreInterface {
  epicMiddleware.run(rootEpics);
  return { store };
}

export const useAppSelector: TypedUseSelectorHook<MainState> = useSelector;
