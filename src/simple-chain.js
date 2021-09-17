import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push("( " + value + " )")
    return this
  },
  removeLink(position) {
    if (position && Number.isInteger(position) && position > 0 && position <= this.chain.length){
      this.chain.splice(position-1, 1)
      return this}
    else {
      this.chain = [];
      throw Error ('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    return (this.chain.splice(0, this.getLength())).join("~~")
  }
};


