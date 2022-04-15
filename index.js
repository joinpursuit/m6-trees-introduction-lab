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
    if (this.root.data === data) {
      return this.root;
    }
    for (let child of this.root.children) {
      // turn the child into a tree to pass it the findNode method, maybe move method into the treeNode could also work for depth search
      let treeChild = new Tree(child);
      let result = treeChild.findNode(data);
      if (result) {
        return result;
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
