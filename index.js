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
    if (!this.root) return null;
    let item = null;
    let queue = [this.root];
    while (queue.length) {
      let item = queue.shift(); 
      if (item.data === data) {
        return item;
      }
      for (let child of item.children) {
        queue.push(child);
      }
    }
    return item;
  }
}


module.exports = { TreeNode, Tree };
