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
    let currentNode = this.root;
    let queue = [this.root];

    while (queue.length) {
      currentNode = queue.shift();
      if (currentNode.data === data) {
        return currentNode;
      }

      if (currentNode.children) {
        for (let child of currentNode.children) {
          queue.push(child);
        } 
      }
    }
    return null
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
    
      

console.log(treeA.findNode("H"))
console.log(TreeNode)
// console.log(treeA)

module.exports = { TreeNode, Tree };
