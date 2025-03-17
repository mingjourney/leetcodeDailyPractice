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
  const res = [];
  if (!root) return res;
  const quene = [root];
  while (quene.length > 0) {
    const len = quene.length;
    const vals = [];
    for (let i = 0; i < len; i++) {
      const node = quene.shift();
      vals.push(node.val);
      if (node.left) quene.push(node.left);
      if (node.right) quene.push(node.right);
    }
    res.push(vals);
  }
  return res;
};
// @lc code=end

