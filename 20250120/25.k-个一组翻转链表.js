/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const reverseList = (start, end) => {
    let [prev, cur] = [start, start.next];
    const first = cur;
    while (cur !== end) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    start.next = prev;
    first.next = cur;
    return first;
  }

  const dummy = new ListNode();
  dummy.next = head;
  let [start, end] = [dummy, dummy.next]
  let count = 0;
  while ( end) {
    ++count;
    if (count % k === 0) {
      start = reverseList(start, end.next);
      end = start.next;
    } else {
      end = end.next;
    }
  }
  return dummy.next;
};
// @lc code=end

