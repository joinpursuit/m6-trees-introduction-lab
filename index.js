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

  findNode(data, node = this.root) {
    if (this.root.data === data) {
      return this.root;
    }
    if (!node || !node.children.length) {
      return null;
    }

    let result = node.children.map((child) => {
      if (child.data === data) {
        return child;
      } else {
        return this.findNode(data, child);
      }
    });
    let found = result.filter((x) => {
      return x != null;
    });

    return found[0] ? found[0] : null;
  }
}

module.exports = { TreeNode, Tree };
