/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const row = grid.length, column = grid[0].length;
  let freshCount = 0;
  const queue = [];
  let time = 0;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const isArea = (r, c) => {
    return r >= 0 && r < row && c >= 0 && c < column;
  }
  const bfs = (r, c) => {
    for (const [dx, dy] of directions) {
      const x = r + dx, y = c + dy;
      if (isArea(x, y) && grid[x][y] === 1) {
        freshCount--;
        grid[x][y] = 2;
        queue.push([x, y]);
      }
    }
  }
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (grid[r][c] === 1) {
        freshCount++;
      } else if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }
  if (freshCount === 0) return 0;
  
  while (queue.length) {
    const now = [...queue];
    queue.length = 0;
    for (const badPosition of now) {
      bfs(...badPosition);
    }
    time++;
  }
  return freshCount === 0 ? time - 1 : -1;
};
// @lc code=end

