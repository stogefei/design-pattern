
// 迭代器模式
class Container {
  constructor(list) {
    this.list = list;
  }

  // 生成迭代器
  getIterator() {
    return new Iterator(this);
  }
}

class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }
    
    next() {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
        return null;
    }
    
    hasNext() {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}
const arr = [1, 2, 3, 4, 5, 6];

const container = new Container(arr);
const iterator = container.getIterator();
while(iterator.hasNext()) {
    console.log(iterator.next(), 'iterator');
}