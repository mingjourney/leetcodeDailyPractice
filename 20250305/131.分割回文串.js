/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res =  [];
  const isAaaA = (str) => {
    let [left, right] = [0, str.length -1];
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }
  const dfs = (start, path) => {
    if (start === s.length) {
      res.push([...path]);
      return;
    }
    let cur = '';
    for (let i = start; i < s.length; i++) {
      cur += s[i];
      if (isAaaA(cur)) {
        path.push(cur);
        dfs(i + 1, path);
        path.pop();
      }
    }
  }
  dfs(0, []);
  return res;
};
// @lc code=end

