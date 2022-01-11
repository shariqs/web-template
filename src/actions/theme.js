/**
 * THEME ACTIONS
 * Actions that are relevant to the 'theme' reducer or functionality
 */

import { notification } from "antd";
import { responses, SET_THEME_COLORS, SET_THEME_NAME } from "../constants";
import { get } from "lodash";
import * as Themes from "../constants/themes";

/**
 * Gets the current theme and returns the proper javascript color theme (from 'constants/variables')
 * @param {string} incomingTheme
 * @returns Object - Returns an object that contains the corresponding theme's variables (used for inline-styles)
 */
 export function getThemeColors(incomingTheme) {
  return function (dispatch, getState) {
    let theme = incomingTheme || get(getState(), "settings.theme", "light");

    switch (theme) {
      case "light":
        return Themes.lightTheme;
      case "dark":
        return Themes.darkTheme;
      default:
        return Themes.lightTheme;
    }
  };
}

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
