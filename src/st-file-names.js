import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(arr) {
  // check if given arr is empty
  if (arr.length === 0) return []
  // elements of arr to string
  for (let i = 0; i < arr.length; i++) {
    arr[i] = JSON.stringify(arr[i])
    arr[i] = String(arr[i])
    arr[i] = arr[i].split('"').join('')
  }
  // main part
  let k = 1
  arr[0] = `${arr[0]}`
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr[j] += `(${k})`
        k += 1
      }
    }
    k = 1
  }
  return arr
}
