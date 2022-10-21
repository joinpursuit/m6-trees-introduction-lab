class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
  _findNode(data) {
    if (this.data === data) {
      return this;
    }
    for (let child of this.children) {
      let found = child._findNode(data);
      if (found) {
        return found;
      }
    }
    return null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    return this.root._findNode(data);
  }
}

module.exports = { TreeNode, Tree };
