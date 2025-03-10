/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const m = {};
  const baseCharCode = 'a'.charCodeAt();
  for (const str of strs) {
    const arr = Array(26).fill(0);
    for (const c of str) {
      arr[c.charCodeAt() - baseCharCode]++;
    }
    const list = m[arr] ? m[arr] : [];
    list.push(str);
    m[arr] = list;
  }
  return Object.values(m);
};
// @lc code=end

