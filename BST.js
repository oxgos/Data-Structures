/**
 * 二叉树、二叉树查找
 *    优点: 查找速度快，由其获取最大值和最小值
 * 三种遍历：中序，先序，后序
 */

class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
  show() {
    return this.data
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(data) {
    let n = new Node(data, null, null)
    if (this.root == null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while(true) {
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
    }
    else {
      return this.getSmallest(node.left)
    }
  }
  getMin() {
    let current = this.root
    while(!(current.left == null)) {
      current = current.left
    }
    return current.data
  }
  getMax() {
    let current = this.root
    while(!(current.right == null)) {
      current = current.right
    }
    return current.data
  }
  find(data) {
    let current = this.root
    while(current != null) {
      if (current.data == data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }
  // 中序
  inOrder() {
    if (!(node == null)) {
      this.inOrder(node.left)
      console.log(node.show())
      this.inOrder(node.rigth)
    }
  }
  // 先序
  preOrder(node) {
    if (!(node == null)) {
      console.log(node.show())
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  // 后序
  postOrder(node) {
    if (!(node == null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show())
    }
  }
}