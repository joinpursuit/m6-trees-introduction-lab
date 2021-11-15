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
    if (!this.root)
      return null;

    const next = [this.root];
    while (next.length) {
      const node = next.shift();
      if (node.data === data)
        return node;

      if (node.children.length) {
        next.push(...node.children);
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };