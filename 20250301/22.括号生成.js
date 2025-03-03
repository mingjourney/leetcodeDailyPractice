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
  const dfs = (open, close, path) => {
    if (open + close === n * 2) res.push(path.join(''));
    if (open < n) {
      path.push('(');
      dfs(open + 1, close, path);
      path.pop();
    }
    if (close < open) {
      path.push(')');
      dfs(open, close + 1, path);
      path.pop();
    }
  }
  dfs(0, 0, [])
  return res;
};
// @lc code=end

