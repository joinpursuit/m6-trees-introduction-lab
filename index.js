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
    // should return null if the node does not exist
    let reference = null;

    // Validating if root exists
    if (this.root.data === data) {
      // should return a reference to the root node if it exists
      reference = this.root;
    }else{
      // Validating if children exists
      for (let child of this.root.children) {

        console.log(child)
        // let newTreeChild = new Tree(child);
        // let node = newTreeChild.findNode(data);
        // //
        // if (node) {
        //   reference = node;
        // }
      }
    }
    
    return reference;
  } 
}

module.exports = { TreeNode, Tree };
