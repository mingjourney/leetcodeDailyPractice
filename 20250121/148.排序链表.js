/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function(head) {
  if(!head || !head.next) return head;
  let [slow, fast] = [head, head.next];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow.next;
  slow.next = null;
  let [left, right] = [sortList(head), sortList(mid)];
  const dummy = {}
  cur = dummy;
  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left ? left : right;
  return dummy.next;
};
// @lc code=end

