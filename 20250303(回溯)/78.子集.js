/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [[]];
  const dfs = (start, path) => {
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      res.push([...path]);
      dfs(i + 1, path);
      path.pop();
    }
  }
  dfs(0, []);
  return res;
};
// @lc code=end

