/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const dfs = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    const node = { val: nums[mid] };
    node.left = dfs(left, mid - 1);
    node.right = dfs(mid + 1, right);
    return node;
  }
  return dfs(0, nums.length - 1);
};
// @lc code=end

