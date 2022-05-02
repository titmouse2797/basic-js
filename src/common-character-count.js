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
 function getCommonCharacterCount( s1, s2 ) {
  s1 = s1.split('');
  s2 = s2.split('');
  let count = 0;
  
  console.log(s1, s2)
  
  if (s1.length <= s2.length){
    for ( let y = 0; y < s1.length; y++){
      for ( let x = 0; x < s2.length; x++){
        if (s1[y] === s2[x]){
        s2[x] = undefined;
        count++;
        break;
        }
      }
    }
    console.log(count);
  }
  return count
}

getCommonCharacterCount( "aabcc", "adcaa" );

module.exports = {
  getCommonCharacterCount
};