/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const len = s.length;
  const stack = []
  let curStr = '';
  let curNum = 0
  for (let c of s) {
    if (isNaN(c)) {
      curNum += curNum * 10 + c;
    }
    if (c === '[') {
      
    }
  }
};
// @lc code=end


