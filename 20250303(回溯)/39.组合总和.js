/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  const dfs = (start, target, path) => {
    if (0 === target) {
      res.push([...path]);
    }
    for (let i = start; i < candidates.length; i++) {
      if (target < 0) break;
      path.push(candidates[i]);
      target -= candidates[i];
      dfs(i, target, path)
      path.pop();
      target += candidates[i];
    }
  }
  dfs(0, target, []);
  return res;
};
// @lc code=end

