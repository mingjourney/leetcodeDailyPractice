/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const res = Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const todayTemperature = temperatures[i];
    while (stack.length && todayTemperature > temperatures[stack[stack.length - 1]]) {
      const preIndex = stack.pop();
      res[preIndex] = i - preIndex;
    }
    stack.push(i);
  }
  return res;
};
// @lc code=end

