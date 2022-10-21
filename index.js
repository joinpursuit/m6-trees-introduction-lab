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

    // Validating if children exists
    for (let child of this.root.children) {
      let newTreeChild = new Tree(child);
      let node = newTreeChild.findNode(data);
      //
      if (node) {
        return node;
      }
    }
    return null;
  
  } 
}

module.exports = { TreeNode, Tree };
