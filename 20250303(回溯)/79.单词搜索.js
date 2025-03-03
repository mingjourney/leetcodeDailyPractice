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
var exist = function (board, word) {
  const maxRow = board.length;
  const maxColumn = board[0].length;
  const visited = Array.from({ length: maxRow }, () =>
    Array(maxColumn).fill(false)
  );
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const dfs = (row, column, path, visited) => {
    if (path.length === word.length) return true;
    if (row === maxRow || column === maxColumn || row < 0 || column < 0)
      return false;
    const cur = board[row][column];
    if (cur !== word[path.length]) {
      return false;
    }
    if (!visited[row][column]) {
      path.push(board[row][column]);
      visited[row][column] = true;
      for (const [dx, dy] of directions) {
        const ans = dfs(row + dx, column + dy, path, visited);
        if (ans) {
          return true;
        }
      }
      path.pop();
      visited[row][column] = false;
    }
    return false;
  };
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      const ans = dfs(i, j, [], visited);
      if (ans) return true;
    }
  }
  return false;
};
// @lc code=end
