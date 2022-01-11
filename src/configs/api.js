import axios from "axios";
import { get } from "lodash";

export async function HTTP(method, uri, data, headers = null, params = null) {
  const url = uri?.trim();
  let query = { method, url, headers: {} };

  if (headers !== null) query.headers = headers;
  if (params !== null) query.params = params;
  if (method === "post" || method === "put" || method === "delete" || method === "patch") query.data = data;

  return new Promise(function (resolve, reject) {
    axios(query)
      .then((response) => {
        const { data } = response || {};
        console.log(`API Response: ${uri}`, { query, response, data });
        return resolve(data);
      })
      .catch((err) => {
        let type = get(err, "response.data.type", "");
        console.log(`API Error: ${uri}`, { err, type });
        reject(err);
      });
  });
}
