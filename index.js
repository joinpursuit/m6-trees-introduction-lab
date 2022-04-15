const {inspect} = require("util");

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
    /*
      Tree {
        root: TreeNode {
          data: 'A',
          children: [
            TreeNode {
              data: 'B',
              children: [
                TreeNode { data: 'E', children: [] },
                TreeNode { data: 'F', children: [] },
                TreeNode { data: 'G', children: [] }
              ]
            },
            TreeNode { data: 'C', children: [] },
            TreeNode {
              data: 'D',
              children: [ TreeNode { data: 'H', children: [] } ]
            }
          ]
        }
      }
    */
    if (data === this.root.data) {
      return this.root; 
    } 

    for (let child of this.root.children) {
      /*
      check for each child
      if (child.data === data) {
        return child;
      }

      check for grandchildren for each child
      for (let grandchildren of child.children) {
        if (grandchildren.data === data) {
          return grandchildren;
        }

      what if it's deeply nested? Grandchildren have kids...
      */
  
      let newSubTree = new Tree(child);
      let search = newSubTree.findNode(data);
      // making new subtrees 
      // if data === root of a new sub tree return this.root 
      // otherwise well keep making new subtrees 
      // it theres a match we will return this.root of a new sub tree at current node
      if(search) {
        return search;
      };
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
const treeA = new Tree(a);
console.log(inspect(treeA, {colors: true, depth: 20}));
// console.log(treeA.findNode("A")); //> this.root
// console.log(treeA.findNode("D")); //> this.root.children[2]
console.log(treeA.findNode("H")); //> this.root.children[2].children[0]
console.log(treeA.findNode("F")); //> this.root.children[0].children[1]
// console.log(treeA.findNode("Z")); //> null

module.exports = { TreeNode, Tree };
