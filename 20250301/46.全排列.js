/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = []
  const used = new Array(nums.length).fill(false);
  const dfs = (nums, path, used, res) => {
    if (path.length === nums.length) { 
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, path, used, res);
        used[i] = false;
        path.pop();
      }
    }
  }
  dfs(nums, [], used, res);
  return res;
};
// @lc code=end

