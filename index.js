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
    let result = null
    function traverse(dataToFind, traverseNode) {
      if (dataToFind === traverseNode.data) {
        result = traverseNode
        return
      }
      for (let i = 0; i < traverseNode.children.length; i++) {
        if (result !== null)
          break
        if (traverseNode.children[i] !== undefined && traverseNode.children[i] !== null)
          traverse(dataToFind, traverseNode.children[i])
      }
    }
    traverse(data, this.root)
    return result
  }
}

module.exports = { TreeNode, Tree };
