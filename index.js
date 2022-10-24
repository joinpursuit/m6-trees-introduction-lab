class TreeNode {
	constructor(data = null) {
		this.data = data;
		this.children = [];
	}
	_getHeight() {}
}

class Tree {
	constructor(node) {
		this.root = node;
	}
	getHeight() {
		return this.root._getHeight();
	}
	findNode(data) {
		if (data === this.root.data) {
			return this.root;
		}
		for (let child of this.root.children) {
			let newRoot = new Tree(child);
			let currentNode = newRoot.findNode(data);
			if (currentNode !== null) {
				return currentNode;
			}
		}
		return null;
	}
}

module.exports = { TreeNode, Tree };
