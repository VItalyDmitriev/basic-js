const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }
  let result = [];
  let sumbol = str[0];
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === sumbol) {
      count += 1;
    } else {
      if (count <= 1) {
        result.push([sumbol]);
      } else {
        result.push([count + sumbol]);
      }
      count = 1;
    }
    sumbol = str[i];
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
