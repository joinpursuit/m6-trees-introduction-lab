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
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (node.data === data) {
        return node;
      }
      for (let child of node.children) {
        //Use push() to add each child to the end of the queue
        queue.push(child);
      }
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
