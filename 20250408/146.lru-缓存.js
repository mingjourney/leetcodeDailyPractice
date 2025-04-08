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
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.curLength = 0;
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

LRUCache.prototype.addNodeToHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
}

LRUCache.prototype.moveNodeToHead = function (node) {
  this.removeNode(node);
  this.addNodeToHead(node);
}

LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    const node = this.cache[key];
    this.moveNodeToHead(node);
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
    this.moveNodeToHead(node);
   } else {
    const node = new Node(key, value);
    this.addNodeToHead(node);
    this.cache[key] = node;
    this.curLength++;
    if (this.curLength > this.capacity) {
      delete this.cache[this.tail.prev.key];
      this.removeNode(this.tail.prev);
      this.curLength--;
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

