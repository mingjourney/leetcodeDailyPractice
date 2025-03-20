/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let res = 0;
  const map = new Map();
  map.set(0, 1);
  const dfs = (root, sum, map) => {
    if (!root) return;
    sum += root.val;
    if (map.has(sum - targetSum)) res += map.get(sum - targetSum);
    const sumCount = map.has(sum) ? map.get(sum) : 0;
    map.set(sum, sumCount + 1)
    dfs(root.left, sum, map);
    dfs(root.right, sum, map);
    map.set(sum, sumCount);
  }
  dfs(root, 0, map);
  return res;
};
// @lc code=end

