// 二分查找法
function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1
  }
  var mid = Math.floor((end + start) / 2)
  if (data == arr[mid]) {
    return mid
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1)
  } else {
    return binarySearch(data, arr, mid + 1, end)
  }
}
var arr = [0, 1, 5, 7, 10, 11, 40, 69, 77, 88]
console.log(binarySearch(1, arr, 0, arr.length - 1))
