/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  target += nums.reduce((acc, cur) => acc + cur, 0);
  if (target < 0 || target % 2 !== 0) return 0;
  target /= 2;
  const arr = Array(target + 1).fill(0);
  arr[0] = 1;
  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      arr[j] = arr[j] + arr[j - num];
    }
  }
  return arr[target];
};
// @lc code=end

