const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], 
  getLength() {
  },
  addLink(value) {
    
    this.chain.push( '~( ' + value + ' )~');
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position == 'number' &&  position > 0 && position < this.chain.length && Number.isInteger(position)) {
    this.chain.splice(position - 1, 1);
    return chainMaker;
    } else {
      this.chain = [];
      throw new Error();
      
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    this.chain[0] = this.chain[0].split('').splice(1, this.chain[0].length - 1).join('')
    this.chain[this.chain.length - 1] = this.chain[this.chain.length - 1].split('').splice(0, this.chain[this.chain.length - 1].length - 1).join('');
    let a = [...this.chain];

    this.chain = new Array;
    return a.join('');
    
  }
};


module.exports = chainMaker;
