/**
 * REDUCERS
 * Define how your actions will modify your redux store
 */

import { SET_THEME_NAME, SET_THEME_COLORS } from "../constants";
import initialState from "../redux-store/initialState";

const theme_reducer = (state = initialState.theme, action) => {
  switch (action.type) {
    case SET_THEME_NAME:
      return Object.assign({}, state, { name: action.data });
    case SET_THEME_COLORS:
      return Object.assign({}, state, { colors: action.data });
    default:
      return state;
  }
};

export default theme_reducer;
