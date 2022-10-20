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
    //Set up a variable to keep track of a queue of nodes
    let queue = [this.root];
    //Use a while loop to loop thru the queue until the condition satisfied
    while (queue.length) {
      //Remove nodes at the beginning of array and push them onto the end of queue
      let currentNode = queue.shift();
      if (currentNode.data === data) {
        return currentNode;
      }
      //Use the for...of loop (similar to _traversePreOrder() in class)
      for (let child of currentNode.children) {
        //Use push() to add each child to the end of the queue
        queue.push(child);
      }
    }
    //If the node does not exist, return null
    return null;
  }
}

module.exports = { TreeNode, Tree };
