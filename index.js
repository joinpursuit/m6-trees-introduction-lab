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
    if (data === this.root.data) {
      return this.root;
    }

    for (let node of this.root.children) {
      let newTree = new Tree(node);
      let currentNode = newTree.findNode(data);
      if (currentNode) {
        return currentNode;
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
