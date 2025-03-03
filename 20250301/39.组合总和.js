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
  const dfs = (target, path, start) => {
    if (0 === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (target < 0) break;
      path.push(candidates[i]);
      dfs(target - candidates[i], path, i);
      path.pop();
    }
  } 
  dfs(target, [], 0);
  return res;
};
combinationSum([2,3,6,7], 7)
// @lc code=end

