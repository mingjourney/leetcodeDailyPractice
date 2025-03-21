/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let p = head, q = head;
    while (q && q.next) {
      p = p.next;
      q = q.next.next;
      if (p === q) {
        p = head;
        while (p !== q) {
          p = p.next;
          q = q.next;
        }
        return p;
      }
    }
    return null;
};
// @lc code=end

