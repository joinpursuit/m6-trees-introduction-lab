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

  // findNode(data) {
  //   let item = null;

  //   this.traverseBFS((node) => {
  //     if (node.data == data) {
  //       item = node;
  //     }
  //   });
  //   return item;
  // }

  // traverseBFS(cb) {
  //   const queue = [this.root];

  //   if (cb) {
  //     while (queue.length) {
  //       const node = queue.shift();

  //       cb(node);

  //       for (let child of node.children) {
  //         queue.push(child);
  //       }
  //     }
  //   }
  // }

  findNode(data) {
    let currentNode = this.root;
    let queue = [this.root];
    let item = null
    
    while (queue.length) {
      currentNode = queue.shift();
      if (currentNode.data === data) {
        item = currentNode;
      }

      if (currentNode.children.length > 0) {
        for (let child of currentNode.children) {
          queue.push(child);
        } 
      }
    }
    return item
  }
}

module.exports = { TreeNode, Tree };
