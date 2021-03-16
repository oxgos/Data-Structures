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
      // Todo something
      console.log(res)
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

// Test
let count = 0
function task() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count++
      resolve(`执行完第${count}个任务`)
    }, 1000)
  })
}

const queuePool = new QueuePool()
queuePool.push(task)
queuePool.push(task)
queuePool.push(task)
queuePool.push(task)
queuePool.push(task)