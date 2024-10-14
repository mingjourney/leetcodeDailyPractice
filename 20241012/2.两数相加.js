/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = null, curP = null;
  let p = l1, q = l2, profit = 0;
  while (p || q) {
    const num1 = p ? p.val : 0;
    const num2 = q ? q.val : 0;
    sum = num1 + num2 + profit;
    const add = sum % 10;
    const curNode = {val: add, next: null};
    profit = sum >= 10 ? 1: 0;
    if (curP) {
      curP.next = curNode;
      curP = curP.next;
    } else {
      curP = curNode;
      l3 = curP;
    }
    p = p ? p.next : null;
    q = q ? q.next : null;
  }
  if (profit) {
    curP.next = {val: profit, next: null};
  }
  return l3;
};
// @lc code=end

