class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0 // 记录长度,-1是栈顶位置
  }
  get length() {
    return this.top
  }
  pop() {
    return this.dataStore[--this.top]
  }
  push(element) {
    this.dataStore[this.top++] = element
  }
  peek() {
    return this.dataStore[this.top - 1]
  }
  clear() {
    this.top = 0
  }
}

// test
const s = new Stack()
s.push('David')
s.push('Jack')
s.push('Bryan')
console.log('length' + s.length)
console.log(s.peek())
const popped = s.pop()
console.log('the popped element is:' + popped)
console.log(s.peek())
s.push('Cynthia')
console.log(s.peek())
s.clear()
console.log('length' + s.length)
console.log(s.peek())
