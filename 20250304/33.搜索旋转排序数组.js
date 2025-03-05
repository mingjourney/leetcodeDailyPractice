/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      const cur = nums[mid];
      if (cur === target) return mid;
      const condition = [nums[0] > cur, nums[0] > target, cur < target];
      const trueCount = condition.filter(item => item).length;
      if (trueCount === 1 || trueCount === 3) {
        left = mid + 1
      } else {
        right = mid - 1;
      }
    }
    return -1;
};
// @lc code=end

