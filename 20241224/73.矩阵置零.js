/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  let isFirstColumnHasZero = false;
  let isFirstRowHasZero = false;
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      isFirstColumnHasZero = true;
      break;
    }
  }
  for (let j = 0; j < column; j++) {
    if (matrix[0][j] === 0) {
      isFirstRowHasZero = true;
      break;
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (isFirstRowHasZero) {
    for (let j = 0; j < column; j++) {
      matrix[0][j] = 0;
    }
  }
  if (isFirstColumnHasZero) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
};
// @lc code=end

