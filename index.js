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

	findNode(data, theNode = [this.root]) {
		while (theNode.length) {
			let nodingOn = theNode.shift();
			if (nodingOn.data.includes(data)) {
				return nodingOn;
			}

			for (let child of nodingOn.children) {
				// would anothr for loop work?
				theNode.push(child);
				// tried returning theNode but caused test to fail
			}
		}

		return null;
	}
}
module.exports = { TreeNode, Tree };
