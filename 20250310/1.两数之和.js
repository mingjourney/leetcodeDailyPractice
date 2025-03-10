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
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const t = target - nums[i];
    if (m.has(t)) return [m.get(t), i];
    m.set(nums[i], i);
  }
};
// @lc code=end

