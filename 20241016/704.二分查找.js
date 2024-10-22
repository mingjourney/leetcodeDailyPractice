/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    const cur = nums[mid];
    if (cur === target) {
      return mid;
    } else if (cur < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};
// @lc code=end

