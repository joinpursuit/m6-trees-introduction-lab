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
  // data = [A, D, H, Z, A, E, D, Z]
  findNode(data, currentNode = this.root) {
// console.log(currentNode.children)

    if (currentNode.data === data) {
      return currentNode;
    } else {
      const array = currentNode.children.map((node) => this.findNode(data, node))
      const foundNode = array.find((element) => element !== null) || null

      return foundNode;
    }
  }
}

// let newTree = new Tree(new TreeNode("A"))
// console.log(newTree.findNode("A"))

module.exports = { TreeNode, Tree };
