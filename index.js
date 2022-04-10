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
    if(this.root.data === data) return this.root

    for (let child of this.root.children){
      
      let subTree = new Tree(child)
      let result = subTree.findNode(data)
      
      if (result) return result
    }
    return null
  }
}

module.exports = { TreeNode, Tree };