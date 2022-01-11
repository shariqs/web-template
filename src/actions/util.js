import { HTTP } from "../configs/api";
import { notification } from "antd";
import { responses } from "../constants";
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

// Removable - An example API call
export function someAPICall() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      HTTP("get", `https://hola.ambii.io/v3/public/valid-states`)
        .then(() => {
          notification.success({ message: responses.status.success, description: responses.description.success });
          resolve(true);
        })
        .catch((err) => {
          notification.error({ message: responses.status.error, description: responses.description.error });
          reject(err);
        });
    });
  };
}
