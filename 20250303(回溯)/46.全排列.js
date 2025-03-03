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
const permute = function (nums) {
  const res = [];
  const dfs = (used, path, res) => {
    if (path.length === nums.length) {
      res.push([...path])
      return;
    };
    for (let num of nums) {
      if (!used[num]) {
        path.push(num);
        used[num] = true;
        dfs(used, path, res, nums);
        path.pop();
        used[num] = false;
      }
    }
  }
  dfs({}, [], res)
  return res;
};
// @lc code=end

