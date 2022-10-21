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
    let item = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        item = node
      }
    })
    return item
  }

  traverseBFS(cb) {
    const queue = [this.root]

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node)

        for (let child of node.children) {
          queue.push(child)
        }
      }
    }
  }
}

module.exports = { TreeNode, Tree };
