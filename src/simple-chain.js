const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  mychain : [],
  getLength() {
    return this.mychain.length;
  },
  addLink(value) {
    this.mychain.push(`( ${value} )`);
    return this;
  },
  removeLink(pos) {
    if ( !Number.isInteger(pos) || pos <= 0 || pos > this.mychain.length) {
      this.mychain = [];
      throw Error ("You can't remove incorrect link!");
    }
    this.mychain.splice(pos-1,1);
    return this;
  },
  reverseChain() {
    this.mychain.reverse();
    return this;
  },
  finishChain() {
    let complite = this.mychain.slice();
    this.mychain = [];
    return complite.join('~~');
  }
};

module.exports = {
  chainMaker
};