var util = require('util');

function Node(data) {
	this.data = data;
	this.next = null;
}

function SList() {
	this._length = 0;
	this.head = null;
}

//add node
SList.prototype.add = function(value) {
	var node = new Node(value);
		currentNode = this.head;

		//if empty list
		if(!currentNode) {
			this.head = node;
			this._length++;

			return node;
		}

		//if not empty
		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = node;
		this._length++;

		return node;
};

//find node
SList.prototype.find = function(position) {
	var currentNode = this.head,
        length = this._length,
        count = 1;

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};

//remove node
SList.prototype.remove = function(position) {
	var currentNode = this.head,
			length = this._length,
			count = 0,
			previousNode = null,
			toRemove = null,
			removedNode = null;

	//first node
	if(position == 1) {
		this.head = currentNode.next;
		removedNode = currentNode;
		currentNode = null;
		this._length--;

		return removedNode;
	}
	//any node
	while (count < position) {
		previousNode = currentNode;
		toRemove = currentNode.next;
		count++;
	}
	
	previousNode.next = toRemove.next;
	removedNode = null;
	this._length--;

	return removedNode;

};

/*--- MAIN ---*/

var List = new SList();

for (var i=1; i<11; i++) {
	List.add(i);
}

console.log(List.find(3));
console.log(util.inspect(List, false, null));
List.remove(2);
console.log(util.inspect(List, false, null));



