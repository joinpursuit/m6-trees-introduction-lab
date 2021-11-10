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
    let current = [this.root];

    while (current.length) {
      let node = current.shift();

      if (node.data === data) {
        return node;
      }

      if (node.children) {
        current.push(...node.children);
      }
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
