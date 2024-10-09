/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hash = new Set();
  for (num of nums) {
    if (hash.has(num)) {
      return true;
    }
    hash.add(num)
  }
  return false;
};
// @lc code=end

