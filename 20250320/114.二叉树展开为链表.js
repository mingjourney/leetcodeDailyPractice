/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  while (root) {
    if (!root.left) {
      root = root.right;
    } else {
      let pre = root.left;
      while (pre.right) {
        pre = pre.right;
      }
      pre.right = root.right;
      root.right = root.left;
      root.left = null;
      root = root.right;
    }
  }
  return root;
};
// @lc code=end

