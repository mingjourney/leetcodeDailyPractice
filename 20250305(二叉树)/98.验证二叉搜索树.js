/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  pre = -Infinity;
  const isValid = (root) => {
    if (!root) return true;
    if (!isValid(root.left)) return false;
    if (root.val <= pre) return false;
    pre = root.val;
    return isValid(root.right);
  }
  return isValid(root);
};
// @lc code=end

