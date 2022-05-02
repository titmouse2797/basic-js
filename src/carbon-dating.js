const { NotImplementedError } = require('../extensions/index.js');


function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15; 
  const HALF_LIFE_PERIOD = 5730;
  
  if (typeof sampleActivity !== 'string') return false;

  let sampleActivityNew = parseFloat(sampleActivity);
  if (sampleActivityNew > 0 && sampleActivityNew <= MODERN_ACTIVITY) {
    let formula = 0.693 / HALF_LIFE_PERIOD;
    let time = Math.log(MODERN_ACTIVITY / sampleActivityNew) / formula;
    return Math.ceil(time);
  } 
  return false;
};

module.exports = {
  dateSample
};