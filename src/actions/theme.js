import { notification } from "antd";
import { responses, SET_THEME_COLORS, SET_THEME_NAME } from "../constants";
import { getThemeColors } from ".";

/**
 * Sets the theme in redux
 * @param {string} incomingTheme
 * @returns null
 */
export function setTheme(incomingTheme) {
  return function (dispatch) {
    if (incomingTheme) {
      dispatch({ type: SET_THEME_NAME, data: incomingTheme });
      dispatch({ type: SET_THEME_COLORS, data: dispatch(getThemeColors(incomingTheme)) });
      notification.success({ message: responses.status.success, description: responses.description.themeChanged });
    } else notification.error({ message: responses.status.error, description: responses.description.themeChangeFailed });
  };
}
