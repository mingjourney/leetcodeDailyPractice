/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const isArea = (r, c) => {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
  }
  const dfs = (r, c, index) => {
    if (!isArea(r, c) || grid[r][c] !== 1) return 0;
    let area = 1;
    grid[r][c] = index;
    for (const [dx, dy] of directions) {
      area += dfs(r + dx, c + dy, index);
    } 
    return area;
  }
  let index = 2;
  const map = new Map();
  let max = 0;
  const row_max = grid.length;
  const column_max = grid[0].length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j, index);
        map.set(index, area);
        max = Math.max(max, area);
        index++;
      }
    }
  }
  if (map.size === 0) return 1;
  if (map.size === 1 && max === row_max * column_max) return max;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        const neiborSet = new Set();
        for (const [dx, dy] of directions) {
          const nr = i + dx;
          const nc = j + dy;
          if (isArea(nr, nc) && grid[nr][nc] > 1) {
            neiborSet.add(grid[nr][nc]);
          }
        }
        let totalArea = 1;
        for (const neiborIndex of neiborSet) {
          totalArea += map.get(neiborIndex);
        }
        max = Math.max(totalArea, max);
      }
    }
  }
  return max;
};
//有什么问题

// @lc code=end

