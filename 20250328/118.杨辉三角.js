/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const dp = Array.from({ length: numRows}, (_, index) => Array(index + 1).fill(1))
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
// @lc code=end

