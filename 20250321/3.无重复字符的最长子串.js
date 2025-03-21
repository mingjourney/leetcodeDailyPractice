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
  const map = new Map();
  let left = 0, max = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) left = Math.max(map.get(s[i]) + 1, left);
    map.set(s[i], i);
    max = Math.max(max, i - left + 1);
  }
  return max;
};
// @lc code=end

