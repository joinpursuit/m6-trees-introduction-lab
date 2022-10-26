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
    let currentNode = this.root
    let queue = [this.root]


  if(data === this.root.data) return this.root;

    // console.log(this.root.children[0].data)
    // if(this.root) return this.root.children

  let i = 0
  while(queue.length){
    currentNode = queue.shift()
    if(currentNode.data === data){
      return currentNode
    }
    if(currentNode.children){
      for(let child of currentNode.children){
        queue.push(child)
      }
    }
  }
  return null
}
}

module.exports = { TreeNode, Tree };
