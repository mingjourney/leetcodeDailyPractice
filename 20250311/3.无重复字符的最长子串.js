/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0; 
  const m = new Map();
  let max = 1, l = 0;
  for (let r = 0; r < s.length; r++) {
    if (m.has(s[r])) {
      l = Math.max(l, m.get(s[r]) + 1);
    }
    m.set(s[r], r);
    max = Math.max(max, r - l + 1);
  }
  return max;
};
// @lc code=end

