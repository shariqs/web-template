/**
 * UTILS
 * General utils that may need to use dispatch / getState
 */

import { HTTP } from "../configs/api";
import { notification } from "antd";
import { responses } from "../constants";

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
