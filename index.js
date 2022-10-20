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
    let newNode = new Tree(child);
   console.log(newNode);
    let res = newNode.findNode(data);
    if (res) {
      return res;
    }
  }
  return null;
  }

  // findNode(data, newNode = this.root) {
  //   if (!newNode) return null;
  //   while (newNode) {
  //     if (data === newNode.data) {
  //       return newNode;
  //     } else if (newNode.children) {
  //       return (
  //         newNode.children
  //       );
  //     }
  //   }
  // }
}





module.exports = { TreeNode, Tree };
