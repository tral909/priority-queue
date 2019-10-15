class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) {
			return;
		}
		if (this.left) {
			this.right = node;
		} else {
			this.left = node;			
		}
		node.parent = this;
	}

	removeChild(node) {
		if (this.left.data === node.data && this.left.priority === node.priority) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right.data === node.data && this.right.priority === node.priority) {
			this.right.parent = null;
			this.right = null;
		} else {
			throw new Error(`No such child: ${node}`)
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			this.parent.parent = this;
			this.appendChild(this.parent);
		}
	}
}

module.exports = Node;
