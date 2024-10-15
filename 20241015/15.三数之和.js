/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  const sortNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortNums.length - 2; i++) {
    let x = i + 1, y = sortNums.length - 1;
    if (i > 0 && sortNums[i] === sortNums[i - 1]) continue;
    while (x < y) {
      const sum = sortNums[i] + sortNums[x] + sortNums[y];
      if (sum === 0) {
        res.push([sortNums[x], sortNums[i], sortNums[y]])
        while(x < y && sortNums[x] === sortNums[x + 1]) x++;
        while(x < y && sortNums[y] === sortNums[y - 1]) y--;
        x++;
        y--;
      } else if (sum < 0) {
        x++;
      } else {
        y--;
      }
    }
  }
  return res;
};
// @lc code=end

