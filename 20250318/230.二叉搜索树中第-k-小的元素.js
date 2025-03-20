/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const dfs = (root) => {
    if (!root) return -1;
    const leftRes = dfs(root.left);
    if (leftRes !== -1) return leftRes;
    if (--k === 0) return root.val;
    return dfs(root.right);
  }
  return dfs(root);
};
// @lc code=end

