import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(arr) {
  let sum = 0
  let k = 0;
  for (let j = 0; j < arr[0].length; j++) {
    k = 0
    for (k = 0; k < arr.length; k++) {
      // console.log("j:" + j)
      // console.log("k:" + k)
      // console.log("arr[k][j]:" + arr[k][j])
      // console.log("sum:" + sum)
      if (arr[k][j] === 0) {
        k = arr.length
      } else {
        sum += arr[k][j]
        // console.log("sum:" + sum)
      }
    }
  }
  return sum
}
