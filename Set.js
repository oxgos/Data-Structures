/**
 * 集合
 * 定义: 集合是由一组无序但彼此之间又有一定相关性的成员构成，每个成员在集合中只能出现一次.
 */

 class Set {
    constructor() {
      this.dataStore = []
    }
    add(data) {
      if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data)
        return true
      } else {
        return false
      }
    }
    remove(data) {
      let pos = this.dataStore.indexOf(data)
      if (pos > -1) {
        this.dataStore.splice(pos, 1)
        return true
      } else {
        return false
      }
    }
    contains(data) {
      if (this.dataStore.indexOf(data) > -1) {
        return true
      } else {
        return false
      }
    }
    size() {
      return this.dataStore.length
    }
    // 并集
    union(set) {
      let tempSet = new Set()
      for (let i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i])
      }
      for (let i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
          tempSet.dataStore.push(set.dataStore[i])
        }
      }
      return tempSet
    }
    // 交集
    intersect(set) {
      let tempSet = new Set()
      for (let i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
          tempSet.add(this.dataStore[i])
        }
      }
      return tempSet
    }
    // 是否子集
    subset(set) {
      if (this.size() > set.size()) {
        return false
      } else {
        for (let member in this.dataStore) {
          if (!set.contains(member)) {
            return false
          }
        }
      }
      return true
    }
    // 返回属于第一个集合但不属于第二个集合的成员
    difference(set) {
      let tempSet = new Set()
      for (let i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
          tempSet.add(this.dataStore[i])
        }
      }
      return tempSet
    }
    show() {
      return this.dataStore
    }
 }