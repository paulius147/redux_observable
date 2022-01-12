import { applyMiddleware, createStore, Store } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware

// export const store = createStore(
//     {},
//     {},
//     applyMiddleware(epicMiddleware)
// )

interface ConfigureStoreInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store: Store;
}

// export function configureStore(): ConfigureStoreInterface {
//     epicMiddleware.run(rootEpic);
//     return { store }
// }