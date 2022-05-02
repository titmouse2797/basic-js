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
  let maxNumber = 0;
  const stringNumber = n.toString()
  const arrayNumber = stringNumber.split('')

  for (let i = 0; i < arrayNumber.length; i++) {
    const currentNum = Number(stringNumber.slice(0, i) + stringNumber.slice(i + 1))
    if (currentNum > maxNumber) {
      maxNumber = currentNum
    }
  }

  return maxNumber
}


module.exports = {
  deleteDigit
};
