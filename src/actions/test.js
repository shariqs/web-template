import { HTTP } from "../configs/api";
import { notification } from "antd";
import { responses, SET_TEST } from "../constants";

export function testFunction() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      HTTP("get", `https://hola.ambii.io/v3/public/valid-states`)
        .then((response) => {
          console.log("response: ", response);
          dispatch({ type: SET_TEST, data: true });
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
