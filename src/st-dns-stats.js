import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(arr) {
  let res = {}
  arr.forEach((el) => {
    console.log(el);
    let newArr = el.split(".")
    newArr.reverse()
    let final = ''
    newArr.forEach((elem) => {
      final += `.${elem}`
      if (res[final] === undefined) res[final] = 1
      else res[final] += 1
    })
  })
  return res
}
