/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  nums.reduce((acc, cur) => {
    const curSumMax = acc < 0 ? cur : cur + acc;
    max = Math.max(curSumMax, max);
    return curSumMax;
  }, 0);
  return max;
};
// @lc code=end

