/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// {}[]()
// {[()]}
// 
var isValid = function(s) {
  const m = { ')': '(', ']': '[', '}': '{' }
  const stash = []
  for (let i = 0; i < s.length; i++) {
    if(m.hasOwnProperty(s[i])) {
      const len = stash.length;
      if (len === 0 || (stash[len - 1] !== m[s[i]])) {
        return false
      }
      stash.pop()
    } else {
      stash.push(s[i])
    }
  }
  
  return stash.length === 0;
};
// @lc code=end

