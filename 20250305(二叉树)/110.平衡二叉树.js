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
  const getHeight = (root) => {
    if (!root) return 0;
    const lHeight = getHeight(root.left);
    if (lHeight === -1) return -1;
    const rHeight = getHeight(root.right);
    if (rHeight === -1 || Math.abs(rHeight - lHeight) > 1) return -1;
    return Math.max(lHeight, rHeight) + 1;
  }
  return getHeight(root) !== -1;
};
// @lc code=end

