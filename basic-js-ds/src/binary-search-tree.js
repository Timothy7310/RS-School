const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor(){
    this.node = new Node(null);
  }

  root() {
    if(!this.node.data){
      return null;
    }
    
    return this.node;
  }

  add(data) {

    if (!this.node.data) {
      this.node.data = data;
      return;
    }

    this.node = addElem(this.node, data);

    function addElem(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addElem(node.left, data);
      }
      else if(data > node.data){
        node.right = addElem(node.right, data);
      }

      return node;
    }
  }


  has(data) {
    return searchElem(this.node, data);

    function searchElem(node, data){
      if(!node){
        return false;
      }

      if(node.data === data){
        return true;
      }

      if(data < node.data){
        return  searchElem(node.left, data);
      }
      else if(data > node.data){
        return searchElem(node.right, data);
      }
    }
  }

  find(data) {

    return searchElem(this.node, data);

    function searchElem(node, data){
      if(!node){
        return null;
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        return  searchElem(node.left, data);
      }
      else if(data > node.data){
        return searchElem(node.right, data);
      }
    }

  }

  remove(data) {
    this.node = removeElem(this.node, data);

    function removeElem(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeElem(node.left, data);
        return node;
      } else if(data > node.data){
        node.right = removeElem(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }
        
        if(!node.right){
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right){
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        
        node.left = removeElem(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if(!this.node){
      return;
    }

    let node = this.node;
    while(node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.node){
      return;
    }

    let node = this.node;
    while(node.right){
      node = node.right;
    }
    
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};


// const tree = new BinarySearchTree();

// tree.add(2);
// tree.add(3);
// tree.add(4);

// tree.root();