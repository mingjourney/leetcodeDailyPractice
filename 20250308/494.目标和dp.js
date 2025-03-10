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
  const len = nums.length;
  target += nums.reduce((acc, cur) => acc + cur, 0);
  if (target < 0 || target % 2 !== 0) return 0;
  target /= 2;
  const arr = Array.from({ length: 2 }, () => Array(target + 1).fill(0));
  arr[0][0] = 1;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    for (let j = 0; j < target + 1; j++) {
      arr[(i + 1) % 2][j] = arr[(i) % 2][j] + (cur <= j ? arr[(i) % 2][j - cur] : 0);
    }
  }
  return arr[len % 2][target];
};
// @lc code=end

