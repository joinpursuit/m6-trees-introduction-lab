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
    if(currentNode === null){
      return null;
    }

    if(currentNode.data === data){
      return currentNode;
    }

    for(const child of currentNode.children){
      const foundNode = this.findNode(data, child);
      if(foundNode !== null){
        return foundNode;
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
