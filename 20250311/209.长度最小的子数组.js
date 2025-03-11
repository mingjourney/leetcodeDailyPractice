/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let min = Infinity;
  const len = nums.length;
  for (let right = 0; right < len; right++) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(right - left + 1, min);
      sum -= nums[left++];
    }
  }
  return min <= len ? min : 0;
};
// @lc code=end

