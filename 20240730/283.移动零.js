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
  // 1, 0 , 23, 32, 0, 0, 32  
  let cur = 0;
  nums.forEach(num => {
    if (num !== 0) {
      nums[cur++] = num;
    }
  })
  for (let i = cur; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end

