/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0 || n === 1) return 1;
  let prev1 = 1, prev2 = 1, sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }
  return sum
};
// @lc code=end
