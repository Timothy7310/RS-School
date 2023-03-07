const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArr = [];
  let result = {};
  domains.map(index => {
    newArr.push( index.split('.').reverse())
  });

  for(let i = 0; i < newArr.length; i++){
    let name = '';
    
    newArr[i].map(index => {
      name += `.${index}`;
      if(isNaN(result[name])){
        result[name] = 1;
      }else{
        result[name]++;
      }
    });
  }

  console.log(newArr);
  console.log(result);
  return result;
}

module.exports = {
  getDNSStats
};

getDNSStats([
   'code.yandex.ru',
   'music.yandex.ru',
   'yandex.ru'
 ])