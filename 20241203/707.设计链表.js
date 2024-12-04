/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class LinkNode {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
};
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return null;
  let cur = new LinkNode(0, this.head);
  while (index-- > 0) {
    cur = cur.next;
  }
  console.log("摸鱼")
  return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newHead = LinkNode(val)
  newHead.next = this.head;
  this.head = newHead;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let p = this.head;
  while (p && p.next) {
    p = p.next;
  }
  p.next = new LinkNode(val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let curIndex = 0;
  let p = this.head;
  while (p && ++curIndex < index) {
    if (curIndex === index - 1) {
        return p.val;
    }
    p = p.next;
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

