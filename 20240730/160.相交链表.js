/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // # # # 8 8 1 2 3 4 
    // 9 9 9 9 9 1 2 3 4
    let p = headA, q = headB;
    while(p !== q) {
      p = p === null ? headB : p.next;
      q = q === null ? headA : q.next;
    }
    return p;
};
// @lc code=end

