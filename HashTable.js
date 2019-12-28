/**
 * 散列
 * 散列特点: 1.快速地插入或取用。
 *     缺点: 查找操作效率相对低下
 * 碰撞: 字符串散列值一样，引发了碰撞，导致只有一个值存入散列表
 *      1.利用betterHash解决碰撞(不一定完全解决)
 *      2.利用开链法(一个key存多个值): 利用二维数据[key: []]
 *      3.线性探测法:当发生碰撞时，查看下个位置是否为空，如果为空，则把数据存入，否则继续查找
 */

 class HashTable {
    constructor() {
      this.table = new Array(137)
    }
    buildChains() {
      for(let i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array()
      }
    }
    // 简单利用ASCII码，创建hash（容易产生碰撞）
    simpleHash(data) {
      let total = 0
      for (let i = 0; i < Data.length; ++i) {
        total += data.charCodeAt(i)
      }
      return total % this.table.length
    }
    // 解决碰撞(使用了霍纳算法)
    betterHash(string) {
      const H = 37
      let total = 0
      for (let i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i)
      }
      total = total % this.table.length
      if (total < 0) {
        total += this.table.length - 1
      }
      return parseInt(total)
    }
    put(data) {
      // let pos = this.simpleHash(data)
      let pos = this.betterHash(data)
      this.table[pos] = data
    }
    get(key) {
      return this.table[this.betterHash(key)]
    }
    // 展现所有key和value
    showDistro() {
      for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
          console.log(`${i}: ${this.table[i]}`)
        }
      }
    }
    showChainDistro() {
      for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
          console.log(`${i}: ${this.table[i]}`)
        }
      }
    }
 }


 // test
 let someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
 let hTable = new HashTable()
 for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i])
 }
 hTable.showDistro()

// test 开链法
 let hTable2 = new HashTable()
 hTable2.buildChains()
 for (let i = 0; i < someNames.length; ++i) {
  hTable2.put(someNames[i])
 }
 hTable2.showChainDistro()
