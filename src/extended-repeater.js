const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let withAddition = `${str}`;
  if (options.hasOwnProperty('addition')) {
    let separator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
    let times = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
    for (let i = 0; i < times; i++) {
      withAddition += `${options.addition}`;
      withAddition += separator;
    }
    withAddition = withAddition.slice(0, -separator.length);
  }
  let result = withAddition;
  if (options.hasOwnProperty('repeatTimes')) {
    let separator = options.hasOwnProperty('separator') ? options.separator : '+';
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      result += separator;
      result += withAddition;
    }
  }
  return result;
}

module.exports = {
  repeater
};
