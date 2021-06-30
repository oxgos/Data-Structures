// 使用两个栈实现队列
class StackQueue {
  constructor() {
    this.stackA = []
    this.stackB = []
  }
  enqueue(element) {
    this.stackA.push(element)
  }
  dequeue() {
    if (this.stackB.length === 0) {
      while (this.stackA.length > 0) {
        this.stackB.push(this.stackA.pop())
      }
    }
    return this.stackB.pop() || -1
  }
}
