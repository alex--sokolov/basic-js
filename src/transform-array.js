import {NotImplementedError} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (Array.isArray(arr) === false) throw Error("'arr' parameter must be an instance of the Array!")
    let finalArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            ++i
        } else if (arr[i] === "--discard-prev") {
            if (finalArr.length !== 0 && arr[i - 2] !== '--discard-next') {
                finalArr.pop()
            }
        } else if (arr[i] === "--double-next") {
            if (arr[i + 1] !== undefined) finalArr.push(arr[i + 1])
        } else if (arr[i] === "--double-prev") {
            if (i !== 0 && arr[i - 2] !== '--discard-next') {
                finalArr.push(arr[i - 1])
            }
        } else {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}


console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])); //=> [1, 2, 4, 5]