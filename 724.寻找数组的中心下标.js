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
  let lSum = 0, rSum = 0;
  rSum = nums.slice(1).reduce((acc, cur) => {
    acc += cur;
    return acc;
  })
  if (lSum === rSum) {
    return i;
  }
  for (let i = 1; i < nums.length; i++) {
    if (lSum === rSum) {
      return i;
    }
    lSum += nums[i - 1]
    rSum -= nums[i]
  }
  return -1;
};
// @lc code=end

