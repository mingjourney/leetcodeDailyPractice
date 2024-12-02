/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = Array.from({ length: n }, () => Array(n).fill(0));
  let loop = Math.floor(n / 2);
  let startX = 0, startY = 0;
  let cur = 1, offset = 1;
  while(loop > 0) {
    i = startY, j = startX;
    for (; j < n - offset; j++) {
      res[i][j] = cur++;
    }
    for (; i < n - offset; i++) {
      res[i][j] = cur++;
    }
    for (; j > startX; j--) {
      res[i][j] = cur++;
    }
    for (; i > startX; i--) {
      res[i][j] = cur++;
    }
    startX++;
    startY++;
    loop--;
    offset++;
  }
  if (n % 2 === 1) {
    const mid = (n - 1) / 2;
    res[mid][mid] = cur;
  } 
  return res;
};
// @lc code=end

