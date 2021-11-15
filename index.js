class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }

  hasVal(val) {
    console.log("current node", this.data, this.data === val);
    console.log(this);
    // const valueArr = [];
    // const hasValue = this.data === val
    if (this.data === val) return this;

    for (let child of this.children) {
      console.log("current child", child.data);

      child.hasVal(val);
    }

    return null;

    //const result = valueArr.filter((el) => el);
    //return this.data === val ? this : null
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    // let curNode = this.root
    // while (curNode) {
    //   if (data < curNode.data) {
    //     curNode = curNode.left
    //   } else if (data > curNode.data) {
    //     curNode = curNode.right
    //   } else {
    //     return curNode
    //   }
    // }
    // return null

    return this.root.hasVal(data);
  }
}

module.exports = { TreeNode, Tree };

let treeB;

/*
    ┌─A─┐
  ┌─B   C─┐
  D       E─┐ 
            F─┐
              G─┐
                H─┐
                  I     
*/
const a = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");
const g = new TreeNode("G");
const h = new TreeNode("H");
const i = new TreeNode("I");
a.children.push(b, c);
b.children.push(d);
c.children.push(e);
e.children.push(f);
f.children.push(g);
g.children.push(h);
h.children.push(i);
treeB = new Tree(a);

console.log(treeB.findNode("I"));
//console.log(h.hasVal("H"))
