const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(disksNumber, turnsSpeed) {
  let numOfTurns = Math.pow(2, disksNumber) - 1; // 7  
  let numOfSeconds = Math.floor(3600 * numOfTurns / turnsSpeed);
  let start = {};
  start.turns = numOfTurns;
  start.seconds = numOfSeconds;
  return start;  
}


module.exports = {
  calculateHanoi
};
