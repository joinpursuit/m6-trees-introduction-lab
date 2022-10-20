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

  findNode(data, rootNode = this.root) {
    while (rootNode) {
      if (data === rootNode.data) {
        return rootNode;
      } else if (rootNode.children) {
        return (
          rootNode.children
            .map((node) => {
              return this.findNode(data, node);
            })
            .find((i) => {
              if (i !== null) {
                return i;
              }
            }) || null
        );
      }
    }
  }
}

module.exports = { TreeNode, Tree };
