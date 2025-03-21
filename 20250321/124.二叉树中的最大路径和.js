/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = -Infinity;
  const dfs = (root) => {
    if (!root) return 0;
    const leftSum = Math.max(0, dfs(root.left));
    const rightSum = Math.max(0, dfs(root.right));
    const curMax = leftSum + rightSum + root.val;
    max = Math.max(curMax, max);
    return root.val + Math.max(leftSum, rightSum);
  }
  dfs(root);
  return max;
};
// @lc code=end

