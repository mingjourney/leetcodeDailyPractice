/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const path = [];
  const dfs = (root, depth, path) => {
    if (!root) return;
    if (path.length < depth) path.push(root.val);
    dfs(root.right, depth + 1, path);
    dfs(root.left, depth + 1, path);
  }
  dfs(root, 1, path);
  return path;
};
// @lc code=end

