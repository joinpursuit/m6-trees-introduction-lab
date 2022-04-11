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

  //Return a reference to the root node if it exists
  findNode(data) {
    //accessing root data and children
    let rootData = this.root.data;
    let rootChild = this.root.children;

    //if the root data is equal to the data given to us
    if (rootData === data) {
      //then return the node (root)
      return this.root;
    }

    for (let i = 0; i < rootChild.length; i++) {
      //creating the new Tree
      let newTree = new Tree(rootChild[i]);
      //found is the newTree with the inputted data
      let found = newTree.findNode(data);
      //if the newTree with inputted data is true
      if (found) {
        //then return it
        return found;
      }
    }
    //otherwise return null
    return null;
  }
}

module.exports = { TreeNode, Tree };
