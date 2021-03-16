const Queue = require('../Queue/Queue')
const QueuePool = require('../Queue/examples/queuePool')

describe('Test Queue Class', () => {
  let q = null
  beforeEach(() => {
    q = new Queue()
  })

  afterEach(() => {
    q = null
  })

  test('Queue "empty" method', () => {
    expect(q.empty()).toBeTruthy()
    q.enqueue('Marry')
    expect(q.empty()).toBeFalsy()
  })

  test('Queue "enqueue" and "dequeue" method', () => {
    q.enqueue('Marry')
    expect(q.empty()).toBeFalsy()
    q.dequeue()
    expect(q.empty()).toBeTruthy()
  })

  test('Queue "front" and "back" method', () => {
    const arr = ['David', 'Marry', 'Jack']
    for (let i = 0, len = arr.length - 1; i <= len; i++) {
      q.enqueue(arr[i])
    }
    expect(q.front()).toBe('David')
    expect(q.back()).toBe('Jack')
  })
})

describe('Test QueuePool Class', () => {
  let queuePool
  let count
  beforeAll(() => {
    queuePool = new QueuePool()
    count = 0
  })

  afterAll(() => {
    queuePool = null
    count = null
  })

  test('Test run task', (done) => {
    queuePool.push(createTask((data) => {
      expect(data).toBe(`执行完第1个任务`)
    }))
    queuePool.push(createTask((data) => {
      expect(data).toBe(`执行完第2个任务`)
      done()
    }))
  })
  function createTask(cb) {
    return function task() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          count++
          cb(`执行完第${count}个任务`)
          resolve('ok')
        }, 1000)
      })
    }
  }
})
