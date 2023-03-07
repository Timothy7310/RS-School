const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};


// function dateSample(sampleActivity){

//   sampleActivity = +sampleActivity;

//   if(isNaN(+sampleActivity)){
//     return false;
//   } else {
//     sampleActivity = +sampleActivity;
//   }
//   console.log(typeof(sampleActivity));
  

//   const k = Math.log(2) / HALF_LIFE_PERIOD;

//   const x = Math.log(MODERN_ACTIVITY / sampleActivity);

//   const result = Math.ceil(x / k);
 
//   // return result;
//   console.log(result);


  
// };

function dateSample(sampleActivity){
  if(typeof(sampleActivity) === 'string'){
    
    if(isNaN(+sampleActivity) || sampleActivity.length === 0 || +sampleActivity === 0 || +sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY){
      return false;
    } else {
      sampleActivity = +sampleActivity;

      const k = Math.log(2) / HALF_LIFE_PERIOD;
      const x = Math.log(MODERN_ACTIVITY / sampleActivity);
      const result = Math.ceil(x / k);
      return result;
    }
  }else{
    return false;
  }
}


