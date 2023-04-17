const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
  while (Math.abs(result) > 9) {
    let tens = getTens(result);
    let sum = 0;
    for (let i = 0; i < tens; i++) {
      sum += result / (10 ** i) % 10;
    }
  }
  return result;
}

function getTens(n) {
  let tens = 0;
  while (!(n < 10)) {
    tens++;
    n /= 10;
  }
  return tens;
}

module.exports = {
  getSumOfDigits
};
