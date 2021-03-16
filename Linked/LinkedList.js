class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

// 链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的
//   后继。指向另一个节点的引用叫做链.
class LinkedList {
	constructor(element) {
		this.head = new Node(element || 'head')
	}
	find(element) {
		let currNode = this.head
		while(currNode.element !== element) {
			currNode = currNode.next
		}
		return currNode
	}
	findPrevious(element) {
		let currNode = this.head
		while(currNode.next !== null &&
					currNode.next.element !== element) {
			currNode = currNode.next
		}
		if (!currNode.next || currNode.next.element !== element) {
			return null
		} else {
			return currNode
		}
	}
	insert(newElement, item) {
		const newNode = new Node(newElement)
		const currNode = this.find(item)
		newNode.next = currNode.next
		currNode.next = newNode
	}
	remove(item) {
		const prevNode = this.findPrevious(item)
		if (prevNode.next !== null) {
			prevNode.next = prevNode.next.next
		}
	}
	display() {
		let currNode = this.head
		console.log(currNode.element)
		while(currNode.next !== null) {
			console.log(currNode.next.element)
			currNode = currNode.next
		}
	}
}

module.exports = LinkedList
