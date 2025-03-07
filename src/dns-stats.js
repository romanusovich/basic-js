const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  if (Array.isArray(domains) && domains.length > 0) {
    domains = domains.map(domain => domain = domain.split('.').reverse());
    for (let arr of domains) {
      let dns = '';
      for (let i = 0; i < arr.length; i++) {
        dns += `.${arr[i]}`;
        if (!result.hasOwnProperty(`${dns}`)) result[dns] = 1;
        else result[dns]++;
      }
    }
  } else return {};
  return result;
}

module.exports = {
  getDNSStats
};
