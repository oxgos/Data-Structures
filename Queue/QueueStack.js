// 两个队列实现栈
class QueueStack {
  constructor() {
    this.queueA = []
    this.queueB = []
  }
  push(x) {
    if (this.queueA.length === 0) {
      this.queueA.push(x)

      while (this.queueB.length > 0) {
        this.queueA.push(this.queueB.shift())
      }
    } else if (this.queueB.lenght === 0) {
      this.queueB.push(x)
      while (this.queueA.length > 0) {
        this.queueB.push(this.queueA.shift())
      }
    }
  }
  pop() {
    if (this.queueA.length > 0) {
      return this.queueA.shift()
    } else {
      return this.queueB.shift()
    }
  }
}
