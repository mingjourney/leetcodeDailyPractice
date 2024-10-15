/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// (()
// 666 
var longestValidParentheses = function(s) {
  // (()())()
  const dp = Array(s.length).fill(0);
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    console.log('i', i);
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = i > 2 ? dp[i - 2] + 2 : 2;
      } else {
        if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
          dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
        } else {
          dp[i] = 0;
        }
      }
      max = Math.max(dp[i], max);
    }
    console.log('dp[i]', dp[i])
  }
  return max;
};
// @lc code=end

