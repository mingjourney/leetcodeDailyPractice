/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let curSum = res = 0;
  const m = new Map();
  m.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    const need = curSum - k;
    res += m.get(need) ?? 0;
    m.set(curSum, (m.get(curSum) ?? 0) + 1);
  }
  return res;
};
// @lc code=end

