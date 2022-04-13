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

  // findNode(data, currentNode = this.root) {
  //   if (currentNode.data === data) {
  //     return currentNode;
  //   } else {
  //     const array = currentNode.children.map((node) =>
  //       this.findNode(data, node)
  //     );
  //     const foundNode = array.find((element) => element !== null) || null;
  //     return foundNode;
  //   }
  // }

  findNode(data) {
    let node = this.root;
    if (data === node.data) {
      return node;
    } else {
      for (let eachChild of node.children) {
        //see if the each Child's data is the same as data
        let newTree = new Tree(eachChild);
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

// console.log(treeA);
console.log(treeA.findNode("D"));
module.exports = { TreeNode, Tree };
