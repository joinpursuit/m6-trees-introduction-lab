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
    let root = this.root;
    if (data === root.data) {
      return root;
    }
    // while (root.children.length > 0) {
    //   let children = [];
    //   for (let i = 0; i < root.children.length; i++) {
    //     if (root.children[i].data === data) {
    //       root = root.children[i];
    //       children = null;
    //       break;
    //     } else {
    //       children.push(root.children[i]);
    //     }
    //   }
    //   root.children = children;
    // }
    return root;
  }
}

module.exports = { TreeNode, Tree };
