const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedDesc = arr.filter(item => item > 0).sort((a, b) => b - a);
  let result = [];
  for (let a of arr) {
    if (a <= 0) result.push(a);
    else result.push(sortedDesc.pop());
  }
  return result;
}

module.exports = {
  sortByHeight
};
