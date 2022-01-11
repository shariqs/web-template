/**
 * REDUX STORE SETTINGGS
 * Define how your redux store works
 */

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "./initialState";

const middlewares = [thunk];

export const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
export default store;
