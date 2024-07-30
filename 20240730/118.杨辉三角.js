/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [[1]];
  if (numRows < 2) return res;
  for (let i = 1; i < numRows; i++) {
    const line = Array(i + 1).fill(1)
    const frontLine = res[i - 1]
    for (let j = 1; j < i; j++) {
      line[j] = frontLine[j - 1] + frontLine[j];
    }
    res.push(line)
  }
  return res;
};
// @lc code=end

