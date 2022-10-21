class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
  _findNode(data) {
    if (this.data === data) {
      return this;
    }
    let found = null;
    for (let child of this.children) {
      if (child._findNode(data)) {
        found = child._findNode(data);
        return found;
      }
    }
    return found;
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
