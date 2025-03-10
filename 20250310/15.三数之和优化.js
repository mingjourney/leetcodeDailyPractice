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
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
    if (nums[i] + nums[len - 1] + nums[len] < 0) break;
    let l = i + 1, r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
        r--;
        while (l < r && nums[r] === nums[r + 1]) {
          r--;
        }
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};
// @lc code=end

