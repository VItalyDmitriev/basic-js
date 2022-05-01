const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  
  if (arr.length === 0) {
    return [];
  }
  let copy = [...arr];

  let transform = transformRecursive(copy);
  let result = transform.filter(el => el !== undefined);

  return result;
}

function transformRecursive(copy) {
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === '--discard-next') {
      copy.splice(i, 1, undefined);
      if (copy[i + 1] !== undefined) {
        copy.splice(i + 1, 1, undefined);
      }
    }
    if (copy[i] === '--discard-prev') {
      copy.splice(i, 1, undefined);
      if (copy[i - 1] !== undefined) {
        copy.splice(i - 1, 1, undefined);
      }
    }
    if (copy[i] === '--double-next') {    
      if (copy[i + 1] !== undefined) {
        copy[i] = copy[i + 1];
      } else {
	      copy.splice(i, 1, undefined);
      }
    }
    if (copy[i] === '--double-prev') {
      if (copy[i - 1] !== undefined) {
        copy[i] = copy[i - 1];
      } else {
        copy.splice(i, 1, undefined);
      }
    }
  }

  return copy;
}

module.exports = {
  transform
};
