const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.arr = [];
  }
  push(element) {
    // first
    // console.log(this.arr.unshift(element));
    // return this.arr.unshift(element);

    // second
    console.log(this.arr.push(element));
    return this.arr.push(element);
  }

  pop() {
    // first
    // console.log(this.arr.shift());
    // return this.arr.shift();   
    
    // second
    console.log(this.arr.pop());
    return this.arr.pop();   
  }

  peek() {
    // first
    // console.log(this.arr[0]);
    // return this.arr[0];

    // second
    console.log(this.arr[this.arr.length - 1]);
    return this.arr[this.arr.length - 1];
  }
}

module.exports = {
  Stack
};
 const stack = new Stack();

stack.push(1); // adds the element to the stack
 stack.peek(); // returns the peek, but doesn't delete it, returns 1
 stack.pop(); // returns the top element from stack and deletes it, returns 1
 stack.pop(); // undefined