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
    let node = this.root;
    if (data === node.data) {
      return node;
    } else {
      for (let child of node.children) {
        let newTree = new Tree(child);
        let result = newTree.findNode(data);
        if (result) {
          return result;
        }
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
treeA = new Tree(a);

console.log(treeA.findNode("B"));

module.exports = { TreeNode, Tree };
