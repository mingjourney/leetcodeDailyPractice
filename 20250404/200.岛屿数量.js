/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const row = grid.length, column = grid[0].length;
  const isArea = (i, j) => {
    return i >= 0 && i < row && j >= 0 && j < column;
  }
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const dfs = (i, j) => {
    if (!isArea(i, j) || grid[i][j] === '0') return;
    grid[i][j] = '0';
    for ([dx, dy] of directions) {
      dfs(i + dx, j + dy);
    }
  }
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

