/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = [];
  let [left, top, right, bottom] = [0, 0, matrix[0].length, matrix.length];
  while (1) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]);
    if (++top === bottom) break;
    for (let i = top; i < bottom; i++) res.push(matrix[i][right - 1]);
    if (--right === left) break;
    for (let i = right - 1; i >= left; i--) res.push(matrix[bottom - 1][i]);
    if (--bottom === top) break;
    for (let i = bottom - 1; i >= top; i--) res.push(matrix[i][left]);
    if (++left === right) break;
  }
  return res;
};
// @lc code=end

