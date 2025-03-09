/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if (!root) return [];
  let cur = [root];
  const res = [];
  while (cur.length) {
    const vals = [];
    const len = cur.length;
    for (let i = 0; i < len; i++) {
      const node = cur.shift();
      vals.push(node.val);
      if (node.left) cur.push(node.left);
      if (node.right) cur.push(node.right);
    }
    res.push(vals);
  }
  return res;
};
// @lc code=end

