/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let res = 0;
  let cur = s.length - 1;
  for (let i = g.length; i >= 0; i--) {
    if(s[cur] >= g[i]) {
      cur--;
      res++;
    }
  }
  return res;
};
// @lc code=end

