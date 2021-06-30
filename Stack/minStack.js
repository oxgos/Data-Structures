// 包含min函数的栈
class minStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(x) {
    this.stack.push(x)
    if (this.minStack.length === 0 || x < this.min()) {
      this.minStack.push(x)
    } else {
      this.minStack.push(this.min())
    }
  }
  pop() {
    this.minStack.pop()
    return this.stack.pop()
  }
  top() {
    var length = this.stack.length
    return length > 0 && this.stack[length - 1]
  }
  min() {
    const length = this.minStack.length
    return length > 0 && this.minStack[length - 1]
  }
}
