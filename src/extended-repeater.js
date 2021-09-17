import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = "" + str

  if ((!!options &&
      typeof options === 'object' &&
      options instanceof Object &&
      !(options instanceof Array)) === false) {

    return str
  }

  options.addition = (options.addition !== undefined) ? "" + options.addition : ""
  if ((!!options.repeatTimes && Number.isInteger(options.repeatTimes)) === false) {
    options.repeatTimes = 0
  }
  if ((!!options.additionRepeatTimes && Number.isInteger(options.additionRepeatTimes)) === false) {
    options.additionRepeatTimes = 0
  }
  if ((!!options.separator &&
      typeof options.separator === "string" ||
      options.separator instanceof String) === false) {
    options.separator = '+'
  }
  if ((!!options.additionSeparator &&
      typeof options.additionSeparator === "string" ||
      options.additionSeparator instanceof String) === false) {
    options.additionSeparator = '|'
  }

  // console.log("Str: " + str + "\n" +
  //     "repeatTimes: " + options.repeatTimes + "\n" +
  //     "additionRepeatTimes: " + options.additionRepeatTimes + "\n" +
  //     "separator: " + options.separator + "\n" +
  //     "additionSeparator: " + options.additionSeparator + "\n" +
  //     "Addition: " + options.addition)

  // let finalStr = new Array(options.repeatTimes + 1).join(str
  //         + new Array(options.additionRepeatTimes + 1).join(new Array(options.additionRepeatTimes).join(options.additionSeparator) + options.addition
  //         + new Array(options.additionRepeatTimes).join(options.additionSeparator))
  //         + options.separator)
  let finalSeparator = options.addition
  if (options.additionRepeatTimes > 0) {
    finalSeparator = new Array(options.additionRepeatTimes + 1).join(options.addition + "/n").split("/n")
    finalSeparator.pop()
    finalSeparator = finalSeparator.join(options.additionSeparator)
  }
  // console.log(finalSeparator);
  let finalStr = str+finalSeparator
  if (options.repeatTimes > 0) {
    finalStr = new Array(options.repeatTimes + 1).join(str + finalSeparator + "/n").split("/n")
    finalStr.pop()
    finalStr = finalStr.join(options.separator)
  }
  //finalStr = finalStr.join(finalSeparator + options.separator)

  //console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')
  return finalStr
}



//console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }), 'TESTstrADD!');