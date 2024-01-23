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
    const search = (node) => {
      if (node.data === data) {
        return node;
      }
      for (let child of node.children) {
        let result = search(child);
        if(result) {
          return result;
        }
      }
      return null;
    }
    return search(this.root)
  }
}

module.exports = { TreeNode, Tree };
