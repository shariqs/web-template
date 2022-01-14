/**
 * EXPORT REDUCERS
 * Exports all of your reducers (must import / export manually)
 */

import { combineReducers } from "redux";
import theme from "./themes";

export default combineReducers({
  theme,
});
