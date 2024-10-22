/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let l = 0, r = nums.length - 1;
  const res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      res[i] = nums[l] * nums[l];
      l++;
    } else {
      res[i] = nums[r] * nums[r];
      r--;
    }
  }
  return res;
};
// @lc code=end

