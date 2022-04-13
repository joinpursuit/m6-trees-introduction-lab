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
    if (data === node.data) {
      return node;
    } else {
      for (let child of node.children) {
        let newTree = new Tree(child);
        let result = newTree.findNode(data);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }
}


module.exports = { TreeNode, Tree };
