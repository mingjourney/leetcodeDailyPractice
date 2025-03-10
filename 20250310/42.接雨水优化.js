/*
 * @lc app=leetcode.cn id=42 lang=ravascript
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
  let left_max = 0, right_max = 0;
  let l = 0, r = len - 1;
  let res = 0;
  while (l < r) {
    left_max = Math.max(left_max, height[l]);
    right_max = Math.max(right_max, height[r]);
    if (left_max < right_max) {
      res += left_max - height[l];
      l++;
    } else {
      res += right_max - height[r];
      r--;
    }

  }
  return res;
};
// @lc code=end

