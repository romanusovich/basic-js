const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(value) {
    if (typeof value === 'number' && value > 0 && this.chain.length >= value) this.chain.splice(value - 1, 1);
    else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = ``;
    for (let i = 0; i < this.chain.length - 1; i++) {
      string += `( ${this.chain[i]} )~~`;
    }
    string += `( ${this.chain[this.chain.length - 1]} )`;
    this.chain = [];
    return string;
  }
};

module.exports = {
  chainMaker
};
