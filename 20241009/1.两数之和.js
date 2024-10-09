/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  const hash = new Map();
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    const need = target-cur;
    if (hash.has(need)) {
      const prevLocation = hash.get(need) 
      return [prevLocation, i]
    }
    hash.set(cur, i)
  }
  return -1;
};
// @lc code=end

