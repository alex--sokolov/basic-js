import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr = []) {
    if (arr.length === 0) return 1;
    if (Array.isArray(arr)) {
      let n =  1 + Math.max(...arr.map(u => {
        return this.calculateDepth(u)
      }));
      console.log(n);
      return n
    }
    return 0
  }
}
