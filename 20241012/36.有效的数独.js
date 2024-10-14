/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const lineSet = Array.from({length: 9}, () => new Set());
  const rowSet = Array.from({length: 9}, () => new Set());
  const squareSet = Array.from({ length: 3 }, () => Array.from({length: 3}, () => new Set()));
  for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j ++) {
      const curNum = board[i][j];
      if (curNum === '.') continue;
      const [squR, squC] = [Math.floor(i / 3), Math.floor(j / 3)];
      if (lineSet[i].has(curNum)
        || rowSet[j].has(curNum) 
        || squareSet[squR][squC].has(curNum)) {
        return false
      }
      lineSet[i].add(curNum);
      rowSet[j].add(curNum);
      squareSet[squR][squC].add(curNum);
    }
  }
  return true;
};
// @lc code=end

