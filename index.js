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
    let queue = [this.root]; //create queue
    while (queue.length > 0) {
      //loop if not empty
      let node = queue.shift(); //extract out first node in the array
      if (node.data === data) {
        //if node equals data return node
        return node;
      }
      for (let child of node.children) {
        //loop push all children into queue
        queue.push(child);
      }
    }
    return null; //return null if node does not exist
  }
}

module.exports = { TreeNode, Tree };
