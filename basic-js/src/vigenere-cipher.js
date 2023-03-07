const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.square = [];
  }
  errorFunc(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }


  encrypt(message, key) {
    this.errorFunc(message, key);
  }
  decrypt(message, key) {
    this.errorFunc(message, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};


// const directMachine = new VigenereCipheringMachine();

// directMachine.decrypt(undefined, 'alphonse');