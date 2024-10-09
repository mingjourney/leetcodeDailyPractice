/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arr = []
  let cur = head;
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  while(arr.length) {
    if (arr[0] === arr[arr.length - 1]) {
      arr.shift();
      arr.pop();
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

