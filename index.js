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

  //use the breath first search to implement it
  findNode(data) {
    let queue = [this.root]; // create a queue with root in it
    //if the queue is not empty keep looping
    while (queue.length > 0) {
      let node = queue.shift(); //pop out the first node in the array
      if (node.data === data) {
        return node;
      }

      //push all the children of the current node into the queue
      console.log(this);
      for (let child of node.children) {
        queue.push(child);
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

//console.log(treeA);
console.log(treeA.findNode("B"));

module.exports = { TreeNode, Tree };
