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

  findNode(data, newNode = this.root) {
    if (!newNode) return null;
    while (newNode) {
      if (data === newNode.data) {
        return newNode;
      } else if (newNode.children) {
        return (
          newNode.children
            .map((node) => this.findNode(data, node))
            .find((n) => n !== null) || null
        );
      }
    }
  }
}

module.exports = { TreeNode, Tree };
