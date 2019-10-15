const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		//return this.root === null;
	}

	clear() {
		
	}

	insertNode(node) {
		/*if (this.isEmpty()) {
			this.root = node;
		} else {

		}*/
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;


let h = new MaxHeap();
const node = new Node(42, 15);
h.insertNode(node);