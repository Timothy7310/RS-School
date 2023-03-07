const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strN = n + '';
  let newArr = [];

  for(let i = 1; i <= strN.length; i++){
    newArr.push(strN.substring(0, i - 1) + strN.substring(i, strN.length))
  }
  newArr = newArr.map(index => +index);

  let result = Math.max(...newArr);
  console.log(result);
  return result;
  
}

module.exports = {
  deleteDigit
};

deleteDigit(152)


// let str = '152';

// i = 3;

// str = str.substring(0, i - 1) + str.substring(i, str.length);


// console.log(str);