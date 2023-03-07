const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( /* date */ ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};


function getSeason(date) {
  if (date === null || date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }

  let numOfMounth = date.getMonth();
  if (numOfMounth === 11 || numOfMounth === 0 || numOfMounth === 1) {
    return 'winter';
  } else if (numOfMounth === 2 || numOfMounth === 3 || numOfMounth === 4) {
    return 'spring';
  } else if (numOfMounth === 5 || numOfMounth === 6 || numOfMounth === 7) {
    return 'summer';
  } else if (numOfMounth === 8 || numOfMounth === 9 || numOfMounth === 10) {
    return 'autumn';
  }

}