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

  //return a reference to the root node if it exists
  findNode(data, node = this.root) {
    if (node.data === data) {
      return node;
    }
  }
}

module.exports = { TreeNode, Tree };
