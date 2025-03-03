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
  const res = [];
  const dfs = (leftCount, rightCount, path) => {
    if (path.length === n * 2) {
      res.push(path.join(''));
      return;
    }
    if (leftCount < n) {
      path.push('(');
      dfs(leftCount + 1, rightCount, path);
      path.pop();
    }
    if (leftCount > rightCount) {
      path.push(')');
      dfs(leftCount, rightCount + 1, path);
      path.pop();
    }
  }
  dfs(0, 0, [])
  return res;
};
// @lc code=end

