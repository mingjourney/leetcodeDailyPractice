/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
  const countAZ_cur = Array(26).fill(0);
  const countAZ_p = Array(26).fill(0);
  const len_s = s.length;
  const res = [];
  const len_p = p.length;
  let left = 0;
  for (left; left < len_p; left++) {
    countAZ_p[p[left].charCodeAt() - 'a'.charCodeAt() ]++;
  }
  for (let cur = 0; cur < len_s; cur++) {
    countAZ_cur[s[cur].charCodeAt() - 'a'.charCodeAt()]++;
    
    if (countAZ_cur.every((item, index) => item === countAZ_p[index])) res.push(cur - len_p + 1);
    if (cur < len_p - 1) continue;
    countAZ_cur[s[cur - len_p + 1].charCodeAt() - 'a'.charCodeAt()]--;
  }
  return res;
};
// @lc code=end

