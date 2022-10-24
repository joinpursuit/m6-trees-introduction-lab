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
    let queue = new Array(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.data === data) {
        return node;
      }
      for (const childNode of node.children) {
        queue.push(childNode);
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
