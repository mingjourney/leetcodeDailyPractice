/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let minPirce = Infinity;
  for (let price of prices) {
    minPirce = Math.min(minPirce, price);
    max = Math.max(max, price - minPirce);
  }
  return max;
};
// @lc code=end

