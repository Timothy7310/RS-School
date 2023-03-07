const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    console.log(this.arr.length);
    return this.arr.length;
  },
  addLink(value) {
    let link;
    if (value === undefined) {
      link = '( )';
    }
    else{
      link = `( ${value + ''} )`;
    }
    this.arr.push(link);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.getLength() || typeof position !== 'number') {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};



console.log(function () { } + '');