const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if(!this.head || !this.tail){
      this.head = newNode;
      this.tail = newNode;

    }
    
    this.tail.next = newNode;
    this.tail = newNode;
    
  }

  dequeue() {
    if(!this.head){
      return null;
    }
    let result = this.head.value;
    this.head = this.head.next;
    console.log(result);
    return result;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};


// const queue = new Queue();

// queue.enqueue(5);
// queue.enqueue(3);
// queue.enqueue(1);

// queue.dequeue();
// queue.dequeue();