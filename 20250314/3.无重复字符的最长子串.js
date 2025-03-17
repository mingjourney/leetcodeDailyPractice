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
var lengthOfLongestSubstring = function (s) {
  let l = 0, max = 0;
  let map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r])) {
      l = Math.max(map.get(s[r]) + 1, l);
    }
    map.set(s[r], r);
    max = Math.max(r - l + 1, max);
  }
  return max;
};
// @lc code=end

