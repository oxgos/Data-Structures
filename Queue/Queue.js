class Queue {
	constructor() {
		this.dataStore = []
	}
	enqueue(element) {
		this.dataStore.push(element)
	}
	dequeue() {
		return this.dataStore.shift()
	}
	front() {
		return this.dataStore[0]
	}
	back() {
		return this.dataStore[this.dataStore.length - 1]
	}
	toString() {
		let retStr = ''
		for (let i = 0, len = this.dataStore.length - 1; i <= len; i++) {
			retStr += `${this.dataStore[i]}\n`
		}
		return retStr
	}
	empty() {
		if (this.dataStore.length === 0) {
			return true
		} else {
			return false
		}
	}
}

module.exports = Queue
