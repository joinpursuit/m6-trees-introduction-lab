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
    let node = this.root;
    if (node.data === data) {
      return node;
    }
    for (let eachChild of node.children) {
      let newTree = new Tree(eachChild);
      let ans = newTree.findNode(data);
      if (ans) {
        return ans;
      }
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
