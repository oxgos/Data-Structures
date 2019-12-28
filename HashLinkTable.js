/**
 * 散列
 * 线性探测法:当发生碰撞时，查看下个位置是否为空，如果为空，则把数据存入，否则继续查找
 */

 class HashLinkTable {
    constructor() {
      this.table = new Array(137) // 保存键
      this.values = [] // 保存值
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
    put(key, data) {
      let pos = this.betterHash(key)
      if (this.table[pos] == undefined) {
        this.table[pos] = key
        this.value[pos] = data
      } else {
        while (this.table[pos] != undefined) {
          pos++
        }
        this.table[pos] = key
        this.value[pos] = data
      }
    }
    get(key) {
      let hash = -1
      hash = this.betterHash(key)
      if (hash > -1) {
        for (let i = hash; this.table[hash] != undefined; i++) {
          if (this.table[hash] == key) {
            return this.values[hash]
          }
        }
      }
      return undefined
    }
    // 展现所有key和value
    showDistro() {
      let n = 0
      for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
          console.log(`${i}: ${this.table[i]}`)
        }
      }
    }
}
