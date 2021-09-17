import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(num) {
    let temp = []
    let arr = []
    arr = ("" + num).split("").forEach((el) => temp.push(+el))
    console.log(temp);
  if (num > 9) { return getSumOfDigits(temp.reduce((prev, cur) => prev + cur))}
  else{
      return num;
  }
}

console.log(getSumOfDigits(91));//=> 1
console.log(getSumOfDigits(1));//=> 1