/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = [];
  const dfs = (root, target, path) => {
    if (!root) return path;
    path.push(root.val);
    if (target - root.val === 0 && !root.left && !root.right) res.push([...path])
    dfs(root.left, target - root.val, path);
    dfs(root.right, target - root.val, path);
    path.pop();
  }
  dfs(root, targetSum, []);
  return res;
};
// @lc code=end

