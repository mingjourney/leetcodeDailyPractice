/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const search = (nums, left, right, isLeft) => {
    let ans = nums.length;
    while (left <= right) {
      const mid = Math.floor(right - (right - left) / 2);
      const cur = nums[mid];
      if (cur > target || (isLeft && cur >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
  const [leftIdx, rightIdx] = [
    search(nums, 0, nums.length - 1, true),
    search(nums, 0, nums.length - 1, false) - 1,
  ];
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    return [leftIdx, rightIdx];
  }
  return [-1, -1];
};
// @lc code=end

