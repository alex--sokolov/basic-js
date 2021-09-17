import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let temp = []
  let res = []
  let k = 0
  let result = []
  for (let i=0; i<arr.length; i++){
    if (arr[i] === -1) {
      temp.push(i)
      k++
    }
  }
  arr.sort((a,b)=>{
    return a-b
  })
  //console.log(k);
  //console.log(temp);
  res = arr.slice(k)
  //console.log(res);
  for(let i=0; i< temp.length; i++){
    //console.log(temp[i]);
    //console.log(res);
    result = res.splice(temp[i], 0, -1)
    //console.log(res);
  }
  return res
}
