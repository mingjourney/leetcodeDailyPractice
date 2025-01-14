/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const curHead = new ListNode(0);
  curHead.next = head;
  const stack = [];
  let p = curHead;
  while (p) {
    stack.push(p);
    p = p.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  const prev = stack[stack.length - 1]
  if (prev && prev.next) {
    prev.next = prev.next.next || null;
  }
  return curHead.next;
};
// @lc code=end

