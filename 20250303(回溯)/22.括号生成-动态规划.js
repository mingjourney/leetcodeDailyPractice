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
  const pathList = [];
  pathList.push([null]);
  pathList.push(['()']);
  for (let i = 2; i <= n; i++) {
    const l = [];
    for (let j = 0; j < i; j++) {
      const leftPath = pathList[j];
      const rightPath = pathList[i - j - 1];
      for (let k1 of leftPath) {
        for (let k2 of rightPath) {
          if (k1 === null) k1 = '';
          if (k2 === null) k2 = '';
          const path = `(${k1})${k2}`;
          l.push(path);
        }
      }
    }
    pathList.push(l);
  }
  return pathList[n];

};
// @lc code=end

