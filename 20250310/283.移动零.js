/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let curI = 0;
  for (const num of nums) {
    if (num !== 0) nums[curI++] = num;
  }
  for (let i = curI; i < nums.length; i++) nums[i] = 0
};
// @lc code=end

