/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const res = [];
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }
  const dfs = (index, path) => {
    if (path.length === digits.length) {
      res.push(path.join(''))
      return;
    }
    for (const char of map[digits[index]]) {
      path.push(char);
      dfs(index + 1, path);
      path.pop();
    }
  }
  if (!digits) return [];
  dfs(0, []);
  return res;
};
// @lc code=end

