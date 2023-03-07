const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let arr = str.split('');
  let count = 1;
  let result = '';

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
      count++;
    }
    else{
      if(count > 1){
        result += `${count}${arr[i]}`;
        count = 1;
      }else{
        result += `${arr[i]}`;
      }
    }
  }
  

  console.log(result);
  return result;
}

module.exports = {
  encodeLine
};

encodeLine('aabbbc')