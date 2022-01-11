import { SET_TEST } from "../constants";
import initialState from "../redux-store/initialState";

const test_reducer = (state = initialState.test, action) => {
  console.log("test: ", { state, action });
  switch (action.type) {
    case SET_TEST:
      return action.data;
    // case SET_TEST: // If this were an object
    //   return Object.assign({}, state, { isApple: action.data });
    default:
      return state;
  }
};

export default test_reducer;
