/**
 * 二叉树、二叉树查找
 *    优点: 查找速度快，由其获取最大值和最小值
 * 三种遍历：中序，先序，后序
 */
const Node = require('./utils/node')
const Queue = require('../Queue/Queue')

class BST {
  constructor() {
    this.root = null
  }
  // 插入元素
  insert(data) {
    let n = new Node(data, null, null)
    if (this.root == null) {
      this.root = n
    } else {
      // 插入的每个元素，都是从root开始作对比，所以左边的最下层的数肯定是最小的，右边最下层的数肯定是最大的
      let current = this.root
      let parent
      while (current) {
        // 暂存current，用作赋值，因为如果left/right不为空,current将被替换,用作下一个循环中
        parent = current
        if (data < current.data) {
          current = current.left
          if (current == null) {
            parent.left = n
            break
          }
        } else {
          current = current.right
          if (current == null) {
            parent.right = n
            break
          }
        }
      }
    }
  }
  remove(data) {
    root = this.removeNode(this.root, data)
  }
  removeNode(node, data) {
    if (node == null) {
      return null
    }
    if (data == node.data) {
      // 没有子节点的节点
      if (node.left == null && node.right == null) {
        return null
      }
      // 没有左子节点的节点
      if (node.left == null) {
        return node.right
      }
      // 没有右子节点的节点
      if (node.right == null) {
        return node.left
      }
      // 有两个子节点的节点
      let tempNode = this.getSmallest(node.right)
      node.data = tempNode.data
      node.right = this.removeNode(node.right, tempNode.data)
      return node
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }
  getSmallest(node) {
    if (node.left == null) {
      return node
    } else {
      return this.getSmallest(node.left)
    }
  }
  // 获取二叉树最小值
  getMin() {
    let current = this.root
    while (!(current.left == null)) {
      current = current.left
    }
    return current.data
  }
  // 获取二叉树最大值
  getMax() {
    let current = this.root
    while (!(current.right == null)) {
      current = current.right
    }
    return current.data
  }
  // 查找二叉树中的值
  find(data) {
    // 从根元素开始
    let current = this.root
    while (current != null) {
      if (current.data == data) {
        return current
      } else if (data < current.data) {
        // 比当前节点小，向左找
        current = current.left
      } else {
        // 比当前节点大，向右找
        current = current.right
      }
    }
    return null
  }
  // 中序（中节点在中间）
  inOrder(node, array = []) {
    if (node) {
      this.inOrder(node.left, array)
      array.push(node.value)
      this.inOrder(node.right, array)
    }
    return array
  }
  // 中序（用迭代方法实现）
  inOrderInteration(node) {
    const stack = []
    const result = []
    let current = node
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      result.push(current.value)
      current = current.right
    }
    return result
  }
  // 前序（中节点在前面）
  preOrder(node, array = []) {
    if (!(node == null)) {
      array.push(node.value)
      this.preOrder(node.left, array)
      this.preOrder(node.right, array)
    }
    return array
  }
  // 前序（用迭代方法实现）
  preOrderInteration(node) {
    const stack = []
    const result = []
    let current = node
    while (current || stack.length > 0) {
      while (current) {
        result.push(current.value)
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      current = current.right
    }
    return result
  }
  // 后序（中节点在最后）
  postOrder(node, array = []) {
    if (!(node == null)) {
      this.postOrder(node.left, array)
      this.postOrder(node.right, array)
      array.push(node.value)
    }
    return array
  }
  // 后序（用迭代方法实现）
  postInteration(node) {
    const stack = []
    const result = []
    let current = node
    let last = null // 记录右节点已被访问，例如：中序BD,D是右节点并已经是最底，D出栈后继续出栈并记录，B的right为已记录的D，即可继续出栈
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      if (!current.right || current.right === last) {
        current = stack.pop()
        result.push(current.value)
        last = current
        current = null // 继续出栈
      } else {
        current = current.right
      }
    }
    return result
  }
  // 层级遍历
  levelOrder() {
    if (!this.root) return null
    let result = []
    // 创建队列
    const queue = new Queue()
    queue.enqueue(this.root)
    while (!queue.empty()) {
      const currentNode = queue.dequeue()
      result.push(currentNode.value)
      if (currentNode.left) {
        queue.enqueue(currentNode.left)
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right)
      }
    }
    return result
  }
  // 树的深度
  getDeep(node, deep) {
    deep = deep || 0
    if (node == null) {
      return deep
    }
    deep++
    var dleft = this.getDeep(node.left, deep)
    var dright = this.getDeep(node.right, deep)
    return Math.max(dleft, dright)
  }
}

const bst = new BST()
const array = [10, 4, 1, 2, 3, 6, 50, 20, 31, 60]
for (let i = 0; i <= array.length - 1; i++) {
  bst.insert(array[i])
}
const root = bst.root
console.log(bst.levelOrder())
// console.log(bst.inOrder(root).join(','))
// console.log(bst.inOrderInteration(root).join(','))
// console.log(bst.preOrder(root).join(','))
// console.log(bst.preOrderInteration(root).join(','))
// console.log(bst.postOrder(root).join(','))
// console.log(bst.getDeep(root, 0))
