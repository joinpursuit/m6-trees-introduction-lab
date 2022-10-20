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
    let q = [this.root];
    while (q.length) {
      let currentNode = q.shift();
      if (currentNode.data === data) {
        return currentNode;
      }
      for (let child of currentNode.children) {
        //Use push() to add each child to the end of the queue
        q.push(child);
      }
    }
  
    return null;
  }
}

module.exports = { TreeNode, Tree };
