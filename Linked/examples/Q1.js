// 判断单链表是否存在环
const LinkedList = require('../LinkedList')

// 制造带环的单链表
const linkedList = new LinkedList('0')
for (let i = 1; i <= 6; i++) {
  linkedList.insert(i.toString(), (i - 1).toString())
}
const last = linkedList.find('6')
const sec = linkedList.find('2')
last.next = sec

// 判断
const bool1 = isCircle(linkedList)
console.log(bool1)

const bool2 = isCircle2(linkedList)
console.log(bool2)

// 方法一: 标记法(用visited作标记)
function isCircle(list) {
  let curNode = list.head
  curNode.visited = 1
  while (curNode.next) {
    curNode = curNode.next
    if (curNode.visited === 1) {
      return true
    } else {
      curNode.visited = 1
    }
  }
  return false
}

// 方法二: 快慢指针法,如果相遇即有环
function isCircle2(list) {
  let curNode = list.head
  let slow = curNode.next
  let fast
  if (slow) {
    fast = curNode.next.next
  } else {
    return false
  }
  while (true) {
    if (slow === fast) {
      return true
    } else {
      slow = slow.next
      if (fast.next) {
        fast = fast.next.next
      } else {
        return false
      }
    }
  }
}
