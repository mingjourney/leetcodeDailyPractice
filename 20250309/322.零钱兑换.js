/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=i
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array.from({ length: coins.length + 1 }, () => Array(amount + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j < coins[i]) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] = Math.min(dp[i][j], dp[i + 1][j - coins[i]] + 1);
      }
    }
  }
  const res = dp[coins.length][amount];
  return res !== Infinity ? res : -1;
};
// @lc code=end

