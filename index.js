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
    if (!this.root) return null;
    if (data === this.root.data) return this.root;
    let currentNode = this.root;
    let queue = [currentNode];

    while (queue.length > 0) {
      //loop to find children?
      currentNode = queue.shift();
      // console.log(currentNode.children);

      if (currentNode.data === data) {
        return currentNode;
      }

      if (currentNode.children.length > 0) {
        //if currentNode.children exist.
        //loop through children.

        for (let i = 0; i < currentNode.children.length; i++) {
          queue.push(currentNode.children[i]);
        }
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
