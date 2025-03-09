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
var rob = function (nums) {
  let firstTwo = firstOne = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = Math.max(firstTwo + nums[i], firstOne);
    firstTwo = firstOne;
    firstOne = cur;
  }
  return firstOne;
};
// @lc code=end

