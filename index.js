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

  findNode(data, current = this.root) {
    if (!current) return null;
    while (current) {
      if (data === current.data) {
        return current;
      } else if (current.children) {
        return (
          current.children
            .map((node) => this.findNode(data, node))
            .find((n) => n !== null) || null
        );
      }
    }
  }
}

module.exports = { TreeNode, Tree };
