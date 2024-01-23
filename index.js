class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node = null) {
    this.root = node;
  }

  findNode(data) {
    /*
    console.log("data is " + data);
    console.log("=============")
    console.log(this.root)
    console.log("=============")
    */
    if(!this.root)
      return null;
    
    return this.postorder(this.root, data);
  }

  preorder(node, data){
    if(!node){
      return null;
    }
    if(node.data == data){
      return node;
    }
    let temp;
    
    for(let item of node.children){
      temp = this.preorder(item, data);
      if(temp)
        return temp;
    }
    return null;
  }

  postorder(node, data){
    if(!node){
      return null;
    }
    let temp;
    
    for(let item of node.children){
      temp = this.postorder(item, data);
      if(temp)
        return temp;
    }

    if(node.data == data){
      return node;
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
