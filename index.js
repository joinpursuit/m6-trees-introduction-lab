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
    if (this.root.data === data) return this.root;

    let current = [...this.root.children];
    while (current.length) {
      let point = current.shift();

      if (point.data === data) return point;
      if (point.children) {
        current.push(...point.children);
      }
    }

    return null;
  }
}

const a = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");
const g = new TreeNode("G");
const h = new TreeNode("H");
a.children.push(b, c, d);
b.children.push(e, f, g);
d.children.push(h);

let treeA = new Tree(a);
// console.log(treeA.findNode());
// treeA.findNode();

module.exports = { TreeNode, Tree };
