import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = "" + n
  let arr = n.split("")
  //console.log(arr);
  arr = arr.map((u) => Number(u))
  //console.log(arr);
  let minPos = arr.indexOf(Math.min(...arr))
  //console.log(minPos);
  arr.splice(minPos, 1)
  return +arr.join('')
}
