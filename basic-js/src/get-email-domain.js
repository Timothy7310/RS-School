const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.split('').reverse().join('');
  let index = result.indexOf('@');

  result = result.slice(0, index);
  result = result.split('').reverse().join('');
  console.log(result);
  return result;
}

module.exports = {
  getEmailDomain
};

getEmailDomain('prettyandsimple@example.com')