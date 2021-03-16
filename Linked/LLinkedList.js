class Node {
	constructor(element) {
		this.element = element
		this.prev = null
		this.next = null
	}
}

/*
	双向链表
*/
class LLinkedList {
	constructor() {
		this.head = new Node('head')
	}
	insert(newEle, item) {
		const newNode = new Node(newEle)
		const currNode = this.find(item)
		newNode.prev = currNode
		// 感觉缺少逻辑
		// if (currNode.next !== null) {
		// 	currNode.next.prev = newNode
		// }
		newNode.next = currNode.next
		currNode.next = newNode
	}
	remove(element) {
		const removeNode = this.find(element)
		if (removeNode.next !== null) {
			removeNode.prev.next = removeNode.next
			removeNode.next.prev = removeNode.prev
			removeNode.next = null
			removeNode.prev = null
		}
	}
	display() {
		let currNode = this.head
		while(currNode.next !== null) {
			console.log(currNode.next.element)
			currNode = currNode.next
		}
	}
	dispReverse() {
		let currNode = this.head
		currNode = this.findLast()
		while(currNode.prev !== null) {
			console.log(currNode.prev.element)
			currNode = currNode.prev
		}
	}
	find(element) {
		let currNode = this.head
		while(this.currNode.element !== element) {
			currNode = currNode.next
		}
		return currNode
	}
	findLast() {
		let currNode = this.head
		while(currNode.next !== null) {
 			currNode = currNode.next
		}
		return currNode
	}
}

// test
var cities = new LLinkedList()
cities.insert('Conway', 'head')
cities.insert('Russellville', 'Conway')
cities.insert('Carlisle', 'Russellville')
cities.insert('Alma', 'Carlisle')
cities.display()
cities.remove('Alma')
cities.display()
cities.dispReverse()
