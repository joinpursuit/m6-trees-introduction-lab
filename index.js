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



  findNode (data) {

    let current = this.root

          if (current === null) return null

          if (current.data === data) {
            return current
          }  else {
            if (current.children.length) {
              for (const child of current.children) {
                let newTree = new Tree(child)
                let find = newTree.findNode(data)
    
                if (find) {
                  return find
                }
              }
            }
          }

          return null
}
 

}


module.exports = { TreeNode, Tree };
