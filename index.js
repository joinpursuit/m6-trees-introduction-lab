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
  
    if(this.root.data === data) return this.root
    
    for (let child of this.root.children){
      
      let subTree = new Tree(child)
      let foundNode = subTree.findNode(data)
      
      if (foundNode) return foundNode
      
    }
    return null
  }
}

module.exports = { TreeNode, Tree };

// findNode(data) {
  
//   console.log("starting function for",`${this.root.data}.findNode(${data})`)
//   if( this.root.data === data){
//     console.log("found data, ending function for",`${this.root.data}.findNode(${data})`)
//     return(this.root)

//   }
//   // if(this.root.children.length){
//     for (let child of this.root.children){
//       // console.log(child)
//       let subTree = new Tree(child)
//       let result = subTree.findNode(data)
//       if (result){
//         console.log("result data, ending function for",`${this.root.data}.findNode(${data})`)
//         return result
//       } 
//     }
//   // } else {
//     console.log("nothing found, ending function for",`${this.root.data}.findNode(${data})`)
//     return null
//   // } 


  


  

// }


// }