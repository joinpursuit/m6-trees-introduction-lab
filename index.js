class TreeNode {
  constructor(data = null) {
    this.data = data
    this.children = []
  }
}

class Tree {
  constructor(node) {
    this.root = node
  }

  findNode(data) {
    if (data === this.root.data) {
      return this.root
    }
    let queue = [this.root]

    while (queue.length > 0) {
      const currentNode = queue.shift()
      if (currentNode.data === data) {
        return currentNode
      }
      // const childrenLength = currentNode.children.length

      // for (let i = 0; i < childrenLength; i++) {
        queue.push(...currentNode.children)
      // } 
    }
  return null
  }

}

module.exports = { TreeNode, Tree }
