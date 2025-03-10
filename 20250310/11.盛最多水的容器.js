/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    const span = r - l;
    if (height[l] < height[r]) {
      res = Math.max(res, height[l++] * span);
    } else {
      res = Math.max(res, height[r--] * span);
    }
  }
  return res;
};
// @lc code=end

