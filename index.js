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

  // findNode(data) {
  //   let queue = [this.root]; // create a queue with this.root in it
  //   while (queue.length) {
  //     // keep looping if queue is not empty
  //     let node = queue.shift(); // shift out the first node in the queue/array
  //     if (node.data === data) {
  //       return node;
  //     }
  //     for (let child of node.children) {
  //       queue.push(child);
  //       // push each child of the current node into the queue
  //     }
  //   }
  //   return null;
  // }

  findNode(data) {
    if (!this.root) return null;
    let item = null;
    let queue = [this.root]; // create a queue with this.root in it
    while (queue.length) {
      // keep looping if queue is not empty
      let item = queue.shift(); // shift out the first node in the queue/array
      if (item.data === data) {
        return item;
      }
      for (let child of item.children) {
        queue.push(child);
        // push each child of the current node into the queue
      }
    }
    return item;
  }
}

module.exports = { TreeNode, Tree };
