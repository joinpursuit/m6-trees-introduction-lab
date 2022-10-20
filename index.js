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
      let newTreeChild = new Tree(child);
      // console.log(newTreeChild);
      let res = newTreeChild.findNode(data);
      if (res) {
        return res;
      }
    }
    return null;
  }
  // group work solution
  // findNode(data, currentNode = this.root) {
  //   if (currentNode.data === data) {
  //     return currentNode;
  //   } else if (currentNode.children) {
  //     return (
  //       currentNode.children
  //         .map((child) => {
  //           return this.findNode(data, child);
  //         })
  //         .find((child) => {
  //           if (child !== null) {
  //             return child;
  //           }
  //         }) || null
  //     );
  //   }

  //   return currentNode.children.map((child) => {
  //     if (child.data === data) {
  //       return child;
  //     }
  //   });
  // }
}

module.exports = { TreeNode, Tree };
