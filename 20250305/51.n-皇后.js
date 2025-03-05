/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = [];
  const dfs = (row, path, usedColumn, usedLeftDiag, usedRightDiag) => {
    if (path.length === n) {
      res.push(path.map((num) => '.'.repeat(num) + 'Q' + '.'.repeat(n - num - 1)));
    }
    for (let i = 0; i < n; i++) {
      if (!usedColumn[i] && !usedLeftDiag[i + row] && !usedRightDiag[n + row - i]) {
        path.push(i);
        usedColumn[i] = true;
        usedLeftDiag[i + row] = true;
        usedRightDiag[-i + row + n] = true;
        dfs(row + 1, path, usedColumn, usedLeftDiag, usedRightDiag);
        path.pop();
        usedLeftDiag[i + row] = false;
        usedRightDiag[-i + row + n] = false;
        usedColumn[i] = false;
      }
    }
  }
  dfs(0, [], {}, {}, {});
  return res;
};
// @lc code=end

