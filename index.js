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

  findNode() {
    return this.root;
  }
}

module.exports = { TreeNode, Tree };
