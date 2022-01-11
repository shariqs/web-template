/**
 * INITIAL STATE
 * Defines your initial redux state
 */

import { lightTheme } from "../constants";

let initialState = {
  theme: {
    name: "light",
    colors: lightTheme,
  },
};

export default initialState;
