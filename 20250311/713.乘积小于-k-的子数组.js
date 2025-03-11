/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;
  let left = 0, acc = 1, res = 0;
  const len = nums.length;
  for (let right = 0; right < len; right++) {
    acc *= nums[right];
    while (acc >= k) {
      acc /= nums[left++];
    }
    res += right - left + 1;
  }
  return res;
};
// @lc code=end

