//反转链表
// 判断单链表是否存在环
const LinkedList = require('../LinkedList')

// 制造带环的单链表
const linkedList = new LinkedList('0')
for (let i = 1; i <= 6; i++) {
  linkedList.insert(i.toString(), (i - 1).toString())
}
linkedList.display()
console.log('-------下面是返转后的输出----------')
const head = linkedList.head

const reserveHead = reserveLink(head)
displayReserveLink(reserveHead)

// 返回链
function reserveLink(pHead) {
  let next = null
  let pre = null
  while (pHead) {
    // 暂存下一个
    next = pHead.next
    // 指向前一个
    pHead.next = pre
    // 前一个存储当前
    pre = pHead
    // 轮询到下一个
    pHead = next
  }

  return pre
}

// 反转后输出
function displayReserveLink(head) {
  while (head) {
    console.log(head.element)
    head = head.next
  }
}
