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
  let cur = head;
  let n = 0;
  while (cur) {
    cur = cur.next;
    n++;
  }
  const dummy = { next: head };
  let pre = dummy, p = head, p0 = dummy;
  while (n >= k) {
    let groupHead = p;
    for (let i = 0; i < k; i++) {
      const { next } = p;
      p.next = pre;
      pre = p;
      p = next;
    }
    p0.next.next = p;
    p0.next = pre;
    p0 = groupHead;
    n -= k;
  }
  return dummy.next;
}
// @lc code=end


// @lc code=end

