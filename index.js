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
    /*
    Treee A:
          A
        ┌─┼─┐
        B C D──┐
      ┌─┼─┐    │
      E F G    H
    */
  findNode(data) {
    // Tests:
    // should return a reference to the root node if it exists
    // should return a reference to an internal node if it exists
    // should return a reference to a leaf node if it exists
    // should return null if the node does not exist
    
    // Createting a new queue
    let queue = [this.root];
    // If the queue it's not empty, then iterate over
    while (queue.length > 0) {

      // Proceed to extract the first node in the array
      let node = queue.shift();
      // should return a reference to the root node if it exists
      // Validating if the node equals data return node 
      if (node.data === data) {
        
        return node;
      }
      // Iterate over the children tree, then proceed to adding them to the queue
      for (let child of node.children) {
        queue.push(child);
      }
    }
    // should return null if the node does not exist
    return null; 
  }

}

module.exports = { TreeNode, Tree };
