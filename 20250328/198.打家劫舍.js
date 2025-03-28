/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let firstOne = firstTwo = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = Math.max(firstOne + nums[i], firstTwo);
    firstOne = firstTwo;
    firstTwo = cur;
  }
  return firstTwo;
};
// @lc code=end

