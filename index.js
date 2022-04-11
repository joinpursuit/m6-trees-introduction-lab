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
  let rootChild = this.root.children;
  let rootData = this.root.data;

    if(rootData === data){
      return this.root;
    }

    for (let i = 0; i < rootChild.length; i++){
        let newTree = new Tree(rootChild[i]);
        let found = newTree.findNode(data);

      if(found){
        return found;
      }
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
