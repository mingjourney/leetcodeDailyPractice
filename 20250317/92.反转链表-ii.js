/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummy = { val: null, next: head };
  let p = dummy;
  for (let i = 0; i < left - 1; i++) {
    p = p.next;
  }
  let cur = p.next;
  let pre = null;
  for (let i = 0; i < right - left  + 1; i++) {
    const { next } = cur;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  p.next.next = cur;
  p.next= pre;
  return dummy.next;
};
// @lc code=end

