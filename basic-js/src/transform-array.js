const {
  NotImplementedError
} = require('../extensions/index.js');

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


function transform(arr) {


  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  let superNewArr = [];

  for (let i = 0; i < newArr.length; i++) {


    if (newArr[i] === '--discard-next') {
      if (typeof newArr[i + 2] !== 'string') {
        i++;
      } else {
        i += 2;
      }
    } else if (newArr[i] === '--discard-prev') {
      superNewArr.pop();
    } else if (newArr[i] === '--double-next') {
      if (newArr[i + 1]) {
        superNewArr.push(newArr[i + 1]);
      }
    } else if (newArr[i] === '--double-prev') {
      if (newArr[i - 1]) {
        superNewArr.push(newArr[i - 1]);
      }
    } else {
      superNewArr.push(newArr[i]);
    }

  }
  console.log(superNewArr);

  return superNewArr;


}
transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])

module.exports = {
  transform
};