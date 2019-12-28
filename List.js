/*
	列表型数据结构 
	  列表是一组有序的数据.每个列表中的数据项称为元素。在Js中，列表中
	  的元素可以是任意数据类型。列表中可以保存多少元素并没有事先限定，
	  实际使用时元素的数量受到程序内存的限制。
*/
class List {
	constructor() {
		this.dataStore = []
		this.listSize = 0
		this.pos = 0
	}
	get length() {
		return this.listSize
	}
	append(element) {
		this.dataStore[this.listSize++] = element
	}
	insert(element, after) {
		let insertPos = this.find(after)
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element)
			++this.listSize
			return true
		}
		return false
	}
	remove(element) {
		let findAt = this.find(element)
		if (findAt > -1) {
			this.dataStore.splice(findAt, 1)
			--this.listSize
			return true
		}
		return false
	}
	clear() {
		delete this.dataStore
		this.dataStore.length = 0
		this.listSize = this.pos = 0
	}
	contains(element) {
		for(let i = 0; i < this.listSize; i++) {
			if (this.dataStore[i] === element) {
				return true
			}
		}
		return false
	}
	toString() {
		return this.dataStore
	}
	find(element) {
		for (let i = 0; i < this.listSize; i++) {
			if (this.dataStore[i] === element) {
				return i
			}
		}
		return -1
	}
	// 遍历列表
	front() {
		this.pos = 0
	}
	end() {
		this.pos = this.listSize - 1
	}
	prev() {
		--this.pos
	}
	next() {
		if (this.pos < this.listSize) {
			++this.pos
		}
	}
	currPos() {
		return this.pos
	}
	moveTo(position) {
		this.pos = position
	}
	getElement() {
		return this.dataStore[this.pos]
	}
	hasNext() {
		return this.pos < this.listSize
	}
	hasPrev() {
		return this.pos >= 0
	}
}

// test
const names = new List()
names.append('Jack')
names.append('Marry')
names.append('Clayton')
names.append('David')
names.append('Bryan')
names.append('Danny')

names.front()
console.log(names.getElement())

names.next()
console.log(names.getElement())

names.next()
names.next()
names.prev()
console.log(names.getElement())

// 迭代器
for(names.front(); names.hasNext(); names.next()) {
	console.log(names.getElement())
}

for(names.end(); names.hasPrev(); names.prev()) {
	console.log(names.getElement())
}