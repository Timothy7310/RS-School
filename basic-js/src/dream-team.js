const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};



function createDreamTeam(arr){
  if(Array.isArray(arr)){
    const newArr = [];

    arr.map(index => {
      if(typeof(index) === 'string'){
        newArr.push(index.trim());
      }
    });

    if(newArr.length === 0){
      console.log('false');
      return false;
    }

    const nameOfSuperDuperTeamOfTheWholeWorld = newArr.map(index => index[0].toUpperCase()).sort().join('');

    return nameOfSuperDuperTeamOfTheWholeWorld;

  }else{
    return false;
  }
}