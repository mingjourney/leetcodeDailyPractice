/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  target += sum;
  if (target < 0 || target % 2 !== 0) return 0;
  target /= 2;
  const dfs = (i, target) => {
    if (i < 0) {
      if (target === 0) return 1;
      return 0;
    }
    return dfs(i - 1, target - nums[i]) + dfs(i - 1, target)
  }
  return dfs(nums.length - 1, target);
};
// @lc code=end

