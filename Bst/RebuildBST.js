const Node = require('./utils/node')

function rebuildBST(preOrder, inOrder) {
  if (preOrder.length === 0) return null
  if (preOrder.length === 1) {
    return new Node(preOrder[0])
  }
  // 中节点
  const root = preOrder[0]
  // 中序的根节点索引
  const idx = inOrder.indexOf(root)
  const preLeft = preOrder.slice(1, idx + 1)
  const preRight = preOrder.slice(idx + 1)
  const inLeft = inOrder.slice(0, idx)
  const inRight = inOrder.slice(idx + 1)
  const node = new Node(root)
  node.left = rebuildBST(preLeft, inLeft)
  node.right = rebuildBST(preRight, inRight)
  return node
}

const preOrder = [1, 2, 4, 7, 3, 5, 6, 8]
const inOrder = [4, 7, 2, 1, 5, 3, 8, 6]

console.log(rebuildBST(preOrder, inOrder))
