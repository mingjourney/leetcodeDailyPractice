/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const row = matrix.length, column = matrix[0].length;
  let left = 0, right = row * column - 1;
  while(left <= right) {
    let mid = Math.floor(right - (right - left) / 2);
    const cur = matrix[Math.floor(mid / column)][mid % column]
    if (target === cur) return true;
    if (cur < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
// @lc code=end

