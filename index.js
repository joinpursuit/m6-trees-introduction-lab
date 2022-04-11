
const { inspect } = require("util");

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
    let node = this.root 

    //Check if node exists
    //Cannot return null here if any nodes is a leaf node and as such, doesn't have any children (i.e. !node.children.length)
    if (!node) return null

    //Check if existing node matches, otherwise, check it's children
    // console.log(node.data, data)
    if (node.data === data) {
      return node
    } else {      
      //.map each child and recursively check if each node matches 
      // console.log("children", node.children)
      let results = node.children.map((el) => {
        let subtree = new Tree(el); 
        return subtree.findNode(data)
      })  

      //filter out the result
      // console.log(results)
      let result = results.filter((el) => !!el )
      // console.log("result", result)
      return result[0] ? result[0] : null
    }
  }
}

module.exports = { TreeNode, Tree };
