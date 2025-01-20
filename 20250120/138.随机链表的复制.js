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
  if (!head) return null; // 如果链表为空，直接返回 null
  
  const m = new Map();
  let cur = head;
  
  // 第一次遍历，复制所有节点并存储原节点到新节点的映射
  while (cur) {
      m.set(cur, new Node(cur.val));
      cur = cur.next;
  }
  
  // 第二次遍历，建立 next 和 random 指针
  cur = head;
  while (cur) {
      const copiedNode = m.get(cur);
      copiedNode.next = m.get(cur.next) || null;  // 复制 next 指针
      copiedNode.random = m.get(cur.random) || null; // 复制 random 指针
      cur = cur.next;
  }
  
  // 返回新链表的头节点
  return m.get(head);
};

// @lc code=end

