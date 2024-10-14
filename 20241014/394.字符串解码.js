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
  let stack = [], res = '', mul = 0;
  for (const c of s) {
    if (c >='0' && c <= '9') {
      mul = mul * 10 + Number(c);
    } else if (c >= 'a' && c <= 'z' ) {
      res += c;
    } else if (c === '[') {
      stack.push(res);
      stack.push(mul);
      mul = 0;
      res = '';
    } else if(c === ']') {
      const preMul = stack.pop();
      const prevStr = stack.pop();
      res = prevStr + res.repeat(preMul);
      mul = 0;
    }
  }
  return res;
};
// dae2[ed2[vx]c]
// swasd2
// @lc code=end

