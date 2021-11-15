class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }

  hasVal(val) {
    if (this.data === val) return this;
    for (let child of this.children) {
      const result = child.hasVal(val);
      if (result) {
        return result;
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
    return this.root.hasVal(data);
  }
}

module.exports = { TreeNode, Tree };
