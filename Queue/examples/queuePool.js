const Queue = require('../Queue.js')

class QueuePool {
  constructor() {
    this.queue = new Queue()
    this.running = false
  }

  _run() {
    if (this.queue.empty()) {
      this.running = false
      return
    }
    
    const task = this.queue.dequeue()
    // 执行任务
    task().then((res) => {
      // Todo something with res

      this._run()
    })
  }

  push(task) {
    this.queue.enqueue(task)

    if (!this.running) {
      this.running = true
      this._run()
    }
  }
}

module.exports = QueuePool