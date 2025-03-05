/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = -1, right = nums.length - 1; // 开区间 (-1, n-1)
  while (left + 1 < right) { // 开区间不为空
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < nums[nums.length - 1]) {
          right = mid;
      } else {
          left = mid;
      }
  }
  return nums[right];
};


// @lc code=end

