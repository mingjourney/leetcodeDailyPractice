/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const maxRow = board.length;
  const maxColumn = board[0].length;
  const dfs = (row, column, path) => {
    const len = path.length;
    if (len && path[len - 1] !== word[len - 1]) {
      return false;
    }
    if (row === maxRow || column === maxColumn || row < 0 || column < 0) return false;
    if (path.length === word.length) return true;
    path.push(board[row][column]);
    const upPathAns = dfs(row - 1, column, path);
    if (upPathAns) return true;
    const rightPathAns = dfs(row, column + 1, path);
    if (rightPathAns) return true;
    const bottomPathAns = dfs(row + 1, column, path);
    if (bottomPathAns) return true;
    const leftPathAns = dfs(row - 1, column, path);
    if (leftPathAns) return true;
    path.pop();
    return false;
  };
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      const ans = dfs(i, j, []);
      if (ans) return true;
    }
  }
  return false;
};
// @lc code=end

