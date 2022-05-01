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
  const dns = {};
  for (let domain of domains) {
    while (domain) {
      const sub = "." + domain.split('.').reverse().join('.');
      const indx = domain.indexOf('.');

      if (dns[sub] !== undefined) {
        dns[sub] += 1;
      } else {
        dns[sub] = 1;
      }
      domain = indx !== - 1 ? domain.slice(indx + 1) : '';
    }
  }

  return dns;
}

module.exports = {
  getDNSStats
};
