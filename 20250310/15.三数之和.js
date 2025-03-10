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
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (l < r) {
      const sum = nums[l] + nums[i] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (nums[l] === nums[l + 1] && l < r) l++;
        while (nums[r] === nums[r - 1] && l < r) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++ 
      } else {
        r--
      };
    }
  }
  return res;
};
// @lc code=end

