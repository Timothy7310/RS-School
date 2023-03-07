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
  str = str + '';
  if(options.addition !== undefined){
    options.addition = options.addition + '';
  } else {
    options.addition = '';
  }
  let str1 = [];
  if(options.additionRepeatTimes > 1){
    for(let i = 1; i < options.additionRepeatTimes; i++){
      str1.push(`${options.addition}`);
    }
    str1.unshift(`${str}${options.addition}`)
    str1 = str1.join(`${options.additionSeparator || '|'}`);
  }else{
    str1.push(`${str}${options.addition}`);
    str1 = str1.join('');
  }
  

  let str2 = [];

  if(options.repeatTimes > 1){
    for(let i = 0; i < options.repeatTimes; i++){
      str2.push(`${str1}`);
    }
    str2 = str2.join(`${options.separator || '+'}`);
  }else{
    str2.push(`${str1}`);
    str2 = str2.join('');
  }
  
  




 console.log(str2);
 return str2;
}

module.exports = {
  repeater
};

repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })