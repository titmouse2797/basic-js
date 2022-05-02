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
  if (n < 10) {
    return n;
  }
  
  let summery = 0;
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    summery = summery + str[i] * 1;
  }

  if (summery >= 10) {
    summery = getSumOfDigits(summery);
  }

  return summery;}

module.exports = {
  getSumOfDigits
};
