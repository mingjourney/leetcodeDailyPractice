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
var copyRandomList = function(head, cacheMap = new Map()) {
  if (!head) return null;
  if (!cacheMap.has(head)) {
    const newHead = { val: head.val };
    cacheMap.set(head, newHead);
    newHead.random = copyRandomList(head.random, cacheMap);
    newHead.next = copyRandomList(head.next, cacheMap);
  }
  return cacheMap.get(head);
};

// @lc code=end

