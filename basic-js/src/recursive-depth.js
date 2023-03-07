const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;
    
    arr.map(index => {
      if(index.map){
        count = Math.max(count, 1 + this.calculateDepth(index));
      }
    });

    console.log(count);
    return count;
  }
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();

depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])

