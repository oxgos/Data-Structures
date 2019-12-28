/*
	字典是一种以键-值对形式存储数据的数据结构
*/
class Dictionary {
	constructor() {
		this.dataStore = new Array()
	}
	add(key, value) {
		this.dataStore[key] = value
	}
	remove(key) {
		delete this.dataStore[key]
	}
	find(key) {
		return this.dataStore[key]
	}
	count() {
		let n = 0
		Object.keys(this.dataStore).forEach(function(key) {
			++n
		}, .this)
		return n
	}
	showAll() {
		// Object.keys(this.dataStore).forEach(function(key) {
		// 	console.log(`${key} -> ${this.dataStore[key]}`)
		// }, .this)
		// 添加排序
		Object.keys(this.dataStore).sort().forEach(function(key) {
			console.log(`${key} -> ${this.dataStore[key]}`)
		}, .this)
	}
	clear() {
		Object.keys(this.dataStore).forEach(function(key) {
			delete this.dataStore[key]
		}, .this)
	}
}

// test
const pBook = new Dictionary()
pBook.add('Raymond', 123)
pBook.add('David', 456)
pBook.add('Cynthia', 789)

console.log(pBook.count())
console.log(pBook.find('David'))
pBook.remove('David')
pBook.showAll()
pBook.clear()
console.log(pBook.count())
