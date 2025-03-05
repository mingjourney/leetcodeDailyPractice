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
  const [maxRow, maxColumn] = [matrix.length, matrix[0].length];
  let i = 0, j = maxColumn - 1;
  while (i < maxRow && j >= 0) {
    const cur = matrix[i][j];
    if (cur < target) {
      i++;
    } else if (cur > target) {
      j--;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end

