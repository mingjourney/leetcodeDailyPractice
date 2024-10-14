/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let lSum = 0;
  totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < nums.length; i++) {
    rSum = totalSum - lSum - nums[i];
    if (lSum === rSum) return i;
    lSum += nums[i];
  }
  return -1;
};
// @lc code=end

