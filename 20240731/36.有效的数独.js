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
  const rowArr = Array.from({length: 9}, () => new Set());
  const columnArr = Array.from({length: 9}, () => new Set());
  const squareArr = Array.from({length: 9}, () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const num = board[i][j];

      if (rowArr[i].has(num)) return false;
      if (columnArr[j].has(num)) return false;
      if (squareArr[squareIndex].has(num)) return false; 

      if (num !== '.') {
        rowArr[i].add(num);
        columnArr[j].add(num);
        squareArr[squareIndex].add(num)
      }
      
    }
  }
  return true;
};
 // @lc code=end

// 1 2 3 ......9
// 2 1 1
// 3 1 1
// ...
// 9