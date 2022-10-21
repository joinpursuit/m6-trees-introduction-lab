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
    if (currentNode.data === data) {
      return currentNode
    } else if (currentNode.children) {
      return (
        currentNode.children.map((child) => {
          return this.findNode(data, child)
        })
        .find((child) => {
          if (child !== null) {
            return child
          }
        }) || null
      )
    }
  }
}

module.exports = { TreeNode, Tree };
