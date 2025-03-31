/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i = 0, zero = 0, two = nums.length;
  while (i < two) {
    if (nums[i] === 2) {
      two--;
      [nums[i], nums[two]] = [nums[two], nums[i]];
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[zero], nums[i]] = [nums[i], nums[zero]];
      zero++;
      i++;
    }
  }
};
// @lc code=end

