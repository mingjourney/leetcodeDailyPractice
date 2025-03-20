/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const dfs = (root) => {
    if (!root) return 0;
    const leftLength = dfs(root.left);
    if (leftLength === -1) return -1;
    const rightLength = dfs(root.right);
    if (rightLength === -1) return -1;
    if (Math.abs(leftLength - rightLength) > 1) return -1;
    return Math.max(leftLength, rightLength) + 1;
  }
  return dfs(root) !== -1;
};
// @lc code=end

