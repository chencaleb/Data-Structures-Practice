function Node(data) {
	this.data = data;
	this.parent = null;
	this.children = [];
}

function Tree(data) {
	var node = new Node(data);
	this._root = node;
}

//Simulate hierarchical data
var tree = new Tree('CEO');
console.log(tree._root);