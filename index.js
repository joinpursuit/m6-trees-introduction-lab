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
    const searchNode = (currentNode = this.root) =>
      currentNode.data === data
        ? currentNode
        : currentNode.children
            .map((cNode) => searchNode(cNode))
            .find((e) => !e === false) || null;
    return searchNode();
  }
}

module.exports = { TreeNode, Tree };
