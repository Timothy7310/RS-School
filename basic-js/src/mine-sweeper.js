const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let count = 0;
  const copyArr = JSON.parse(JSON.stringify(matrix))
  console.log(copyArr);
  for(let i = 0; i < matrix.length; i++){
    for(let k = 0; k < matrix[i].length; k++){

      if(matrix[i][k + 1] === true){
        count++;
      }
      if(matrix[i][k - 1] === true){
        count++;
      }

      if(matrix[i + 1] !== undefined){
        if(matrix[i + 1][k] === true){
          count++;
        }
        if(matrix[i + 1][k - 1] === true){
          count++;
        }
        if(matrix[i + 1][k + 1] === true){
          count++;
        }
      }

      if (matrix[i - 1] !== undefined) {
        if(matrix[i - 1][k] === true){
          count++;
        }
        if(matrix[i - 1][k - 1] === true){
          count++;
        }
        if(matrix[i - 1][k + 1] === true){
          count++;
        }
      }
      
      copyArr[i][k] = count;
      count = 0;
    }
  }
  console.log(matrix);
  console.log(copyArr);
  return copyArr;
}

module.exports = {
  minesweeper
};


let matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]

  minesweeper(matrix);