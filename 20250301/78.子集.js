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
  let result = [[]];
  for (let num of nums) {
    let newSubSet = [];
    for (let res of result) {
      newSubSet.push([...res, num]);
    }
    result = [...result, ...newSubSet];
  }
  return result;
};
// @lc code=end

