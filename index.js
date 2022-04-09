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

  findNode(data, currentNode = this.root) {
    return currentNode.data === data ? currentNode : currentNode.children.map((node) => this.findNode(data, node)).find((node) => node) || null
  }
}

module.exports = { TreeNode, Tree };
