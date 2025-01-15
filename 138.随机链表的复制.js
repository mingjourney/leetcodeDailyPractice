/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  
  // Step 1: Insert copied nodes
  let current = head;
  while (current) {
      const copy = new _Node(current.val, current.next, null); // create new node with the same val
      current.next = copy; // insert copied node after current node
      current = copy.next; // move to the next original node
  }
  
  // Step 2: Set random pointers for the copied nodes
  current = head;
  while (current) {
      if (current.random) {
          current.next.random = current.random.next; // set the random pointer for the copied node
      }
      current = current.next.next; // move to the next original node
  }
  
  // Step 3: Separate the original list and the copied list
  current = head;
  const newHead = head.next;
  while (current) {
      const copy = current.next;
      current.next = copy.next; // restore the original list
      if (copy.next) {
          copy.next = copy.next.next; // link copied list
      }
      current = current.next;
  }
  
  return newHead;
};

// @lc code=end

