import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (arr) {
  let res = JSON.parse(JSON.stringify(arr))
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res[i][j] = 0
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === true){
        if (i-1 >= 0 && j-1>= 0)                                  res[i-1][j-1] +=1;
        if (i-1 >= 0)                                            res[i-1][j]   +=1;
        if (i-1 >= 0 && j+1 < arr[i].length +1)                  res[i-1][j+1] +=1;
        if (j-1 >= 0)                                            res[i][j-1]   +=1;
        if (j+1 < arr[j].length +1)                             res[i][j+1]   +=1;
        if (i+1 < arr[i].length +1 && j-1>= 0)                   res[i+1][j-1] +=1;
        if (i+1 < arr[i].length +1)                             res[i+1][j]   +=1;
        if (i+1 < arr[i].length +1 && j+1 < arr[j].length +1)   res[i+1][j+1] +=1;
      }
    }
  }
  return res
}
