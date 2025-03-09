/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const directionMap = { '1': 'left', '-1':'right' };
  let direction = 1;
  const res = [];
  let cur = [root];
  while (cur.length) {
    let ext = []
    let vals = [];
    let len = cur.length;
    for (let i = 0; i < len; i++) {
      const node = cur.pop();
      vals.push(node.val);
      const firstDirection = directionMap[direction];
      const secondDirection = directionMap[direction * -1];
      if (node[firstDirection]) ext.push(node[firstDirection]);
      if (node[secondDirection]) ext.push(node[secondDirection]);
    }
    res.push(vals);
    cur = ext;
    direction *= -1;
  }
  return res;
};
// @lc code=end

