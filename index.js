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

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node.data === data)
        return node;

      if (node.children.length) {
        queue.push(...node.children);
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
