import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(adr) {
  let res = true
  if (typeof adr === "string" || adr instanceof String) {
    adr = (adr.split("-"))
    if (adr.length === 6) {
      adr.forEach((el) => {
        if (el.length === 2) {
          let k = parseInt(el, 16).toString(10);
          if (k < 0 || k > 255 || isNaN(k) === true)  {
            console.log(k);
            res = false
          }
          console.log(k);
        } else res = false
      })
    } else res = false
  } else res = false
  return res
}
