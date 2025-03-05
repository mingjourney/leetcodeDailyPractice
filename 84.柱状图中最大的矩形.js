/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = -Infinity;
  for (let i = 0; i < heights.length; i++) {
    let left = i - 1, right = i + 1;
    while(left >= 0 && heights[left] >= heights[i]) left--;
    while(right < heights.length && heights[right] >= heights[i]) right++;
    const area = heights[i] * (right - left - 1);
    max = Math.max(max, area);
  }
  return max;
};
// @lc code=end

