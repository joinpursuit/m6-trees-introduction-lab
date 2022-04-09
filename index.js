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

  findNode(data, currentNode = this.root) {
    if(currentNode.data === data){
      return currentNode
    } else {
      const array = currentNode.children.map((node) => this.findNode(data, node))
      const foundNode = array.find((element) => element !== null) || null
      return foundNode
    }
  }
}

module.exports = { TreeNode, Tree };
