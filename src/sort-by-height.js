const { NotImplementedError } = require('../extensions/index.js');


 function sortByHeight(arr) {
  let mynewArr = [];
  let indexerArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === -1) {
      indexerArr.push(i);
    } else {
      mynewArr.push(arr[i]);
    }
  }
  mynewArr.sort((a,b) => a-b);
  for (let i=0;i<indexerArr.length;i++) {
    mynewArr.splice(indexerArr[i],0,-1);
  }
  return mynewArr;
}

module.exports = {
  sortByHeight
};
