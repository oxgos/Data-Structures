class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
  get value() {
    return this.data
  }
}

module.exports = Node
