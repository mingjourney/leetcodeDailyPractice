/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const inArea = (r, c) => {
    return 0 <= r && r < grid.length &&
    0 <= c && c < grid[0].length;
  }
  const area = (r, c, grid) => {
    if (!inArea(r, c) || grid[r][c] !== 1) return 0;
    grid[r][c] = 2;
    return 1
      + area(r, c + 1, grid)
      + area(r, c - 1, grid)
      + area(r - 1, c, grid)
      + area(r + 1, c, grid)
  }
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, area(i, j, grid));
      }
    }
  }
  return max;
};
// @lc code=end

