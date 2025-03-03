/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const listN = [];
  listN.push([null]);
  listN.push(['()']);
  for (let i = 2; i <= n; i++) {
    const l = [];
    for (let j = 0; j < i; j++) {
      listL = listN[j];
      listR = listN[i - 1 - j];
      for (let k1 of listL) {
        for (let k2 of listR) {
          if (k1 === null) {
            k1 = '';
          }
          if (k2 === null) {
            k2 = '';
          }
          l.push('('+k1+')'+k2);
        }
      }
    }
    listN.push(l)
  }
  return listN[n]
};
// @lc code=end

