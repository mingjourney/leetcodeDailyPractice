/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let curNum = num;
      let curLength = 1;
      while (set.has(curNum + 1)) {
        curNum++;
        curLength++;
      }
      max = Math.max(max, curLength);
    }
  }
  return max;
};
// @lc code=end

