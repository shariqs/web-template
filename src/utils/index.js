/**
 * UTILS
 * Common utilities to be used in your files
 */

// Generates a random string of length (arg)
export const generateRandomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result.toUpperCase();
};

// Generates a random number of length (arg)
export const generateRandomNumbers = (length) => {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result.toUpperCase();
};

/**
 * Converts an array (of objects) to map
 * @param {array} arr - Incoming array
 * @param {string} key - Key to use from incoming array's objects
 * @returns Map (of incoming array)
 */
export const objArrayToMap = (arr, key) => {
  if (!arr || (arr && arr.length == 0)) return {};
  if (!key) return arr;

  let map = {};
  arr.map((item) => {
    return (map[get(item, key, null)] = item);
  });
  return map;
};

/**
 * Converts an array to map
 * @param {array} arr - Incoming array
 * @returns Map (of incoming array), where Key is the array item, and Value is 'true'
 */
export const arrayToMap = (arr) => {
  if (!arr) return {};
  let map = {};
  arr.map((item) => {
    return (map[item] = true);
  });
  return map;
};
