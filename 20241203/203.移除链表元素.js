/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head, prev = null;
    while(cur) {
      const { next } = cur;
      if (cur.val === val) {
        if (prev === null) {
          head = next;
        } else {
          prev.next = next;
        }
        cur = next;
      } else {
        prev = cur;
        cur = next;
      }
    }
    return head
};

// @lc code=end

