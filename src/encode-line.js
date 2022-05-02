const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  
  let stringarray = str.split("");

    let newarray = new Array();
    let number = 1;
    for( let i = 0; i < stringarray.length; i++ ){
        if( stringarray[i] === stringarray[i + 1] ){
            ++number;
        } else if( stringarray[i] !== stringarray[i + 1] && number !== 1 ) {
          newarray.push( number, stringarray[i] );
          number = 1;
        } else if ( stringarray[i] !== stringarray[i + 1] && number === 1){
          newarray.push( stringarray[i] );
        }
    }
    return newarray.join("");
}

module.exports = {
  encodeLine
};
