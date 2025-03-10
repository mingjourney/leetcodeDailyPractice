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
var sortedArrayToBST = function(nums) {
  const dfs = (l, r) => {
    if (l > r) return null;
    const mid = Math.floor(l + (r - l) / 2);
    const root = { val: nums[mid] };
    root.left = dfs(l, mid - 1);
    root.right = dfs(mid + 1, r);
    return root;
  }
  return dfs(0, nums.length - 1);
};
// @lc code=end

