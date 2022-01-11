/* eslint-disable no-undef */

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import initialState from "./initialState";

const middlewares = [thunk];

export const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
export default { store, persistor };
