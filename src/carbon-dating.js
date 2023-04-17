const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const A0 = 15;
  const A = parseFloat(sampleActivity);
  if (typeof sampleActivity === 'string' && typeof A === 'number' && A0 >= A && A > 0) {
    let k = 0.693 / 5730;
    let t = (Math.log(A0 / A)) / (k);
    return Math.ceil(t);
  } else return false;
}

module.exports = {
  dateSample
};
