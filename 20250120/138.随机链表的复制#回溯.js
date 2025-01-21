/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  if (!head) {
    return null;
  }
  let cur = head;
  const m = new Map();
  while (cur) {
    m.set(cur, new Node(cur.val))
    cur = cur.next;
  }
  cur = head;
  while (cur) {
    const newNode = m.get(cur);
    newNode.random = m.get(cur.random) || null;
    newNode.next = m.get(cur.next) || null;
    cur = cur.next;
  }
  return m.get(head);
};

// @lc code=end

