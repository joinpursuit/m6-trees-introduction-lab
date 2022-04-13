class TreeNode {
  constructor(data = null) {
    this.data = data;
    // this.left = null;
    // this.right = null;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data, 
    currentNode = this.root
    ) {
    // let currentNode = this.root;
    if (!currentNode) return null 
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if(currentNode.children){
       return currentNode.children.map((node) => this.findNode(data, node)).find((n) => n !== null) || null;
      }
    }
  }
}

// const a = new TreeNode("A");
// const b = new TreeNode("B");
// const c = new TreeNode("C");
// const d = new TreeNode("D");
// const e = new TreeNode("E");
// const f = new TreeNode("F");
// const g = new TreeNode("G");
// const h = new TreeNode("H");
// a.children.push(b, c, d);
// b.children.push(e, f, g);
// d.children.push(h);
// const treeA = new Tree(a);

// treeA.findNode("A")
// treeA.findNode("D")
// treeA.findNode("F")
// treeA.findNode("E")
// treeA.findNode("I")
// treeA.findNode("Z")
// treeA.findNode("G")

module.exports = { TreeNode, Tree };
