/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */
// @lc code=start
/**
 * @param {number} capacity
 */
class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = {};
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
}
/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.removeNode = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

LRUCache.prototype.addToHead = function(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
}

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
}

LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    const node = this.cache[key];
    this.moveToHead(node);
    return node.value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key]) {
    const node = this.cache[key];
    node.value = value;
    this.moveToHead(node);
  } else {
    const node = new Node(key, value);
    this.addToHead(node);
    this.cache[key] = node;
    this.size++;
    if (this.size > this.capacity) {
      const lastNode = this.tail.prev;
      this.removeNode(lastNode);
      delete this.cache[lastNode.key];
      this.size--;
    }
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

