const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let ar1 = s1.split('');
  let ar2 = s2.split('');
  let startLength = ar2.length
  console.log(startLength);
  ar1.forEach(function (el) {
    if (ar2.indexOf(el) !== -1) {
      ar2.splice(ar2.indexOf(el), 1);
    }
  })

  return startLength - ar2.length;
}

module.exports = {
  getCommonCharacterCount
};
