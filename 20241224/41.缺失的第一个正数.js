/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    while (nums[i] !== i + 1) {
      if (nums[i] > length || nums[i] <= 0 || nums[nums[i] - 1] === nums[i]) {
        break;
      }
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  for (let i = 0; i < length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return length + 1;
};
// @lc code=end
