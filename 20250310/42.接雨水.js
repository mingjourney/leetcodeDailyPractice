/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  const leftMax = Array(len).fill(0), rightMax = Array(len).fill(0);
  leftMax[0] = height[0];
  rightMax[len - 1] = height[len - 1];
  let res = 0;
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    rightMax[len - i - 1] = Math.max(rightMax[len - i], height[len - i - 1]);
  }
  for (let i = 0; i < len; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
// @lc code=end

