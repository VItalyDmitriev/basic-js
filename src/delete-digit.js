const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArray = Array.from(String(n), Number);
  let compare = [];
  for (let i = 0; i < nArray.length; i++) {
    let pushValue = [...nArray];
    pushValue.splice(i, 1);
    compare.push(Number(pushValue.join("")));
  }

  return Math.max(...compare);
}

module.exports = {
  deleteDigit
};
