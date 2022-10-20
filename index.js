class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    let queue = [this.root]; // create a queue with root in it
    //if the queue is not empty keep looping
    while (queue.length > 0) {
      let node = queue.shift(); //pop out the first node in the array
      if (node.data === data) {
        return node;
      }

      //push all the children of the current node into the queue
      for (let child of node.children) {
        queue.push(child);
      }
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
