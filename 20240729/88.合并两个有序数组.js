/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let cur1 = m - 1, cur2 = n - 1, cur = m + n - 1;
  while(cur1 >= 0 || cur2 >= 0) {
    if (cur1 < 0) {
      nums1[cur--] = nums2[cur2--];
    } else if (cur2 < 0) {
      nums1[cur--] = nums1[cur1--];
    } else {
      nums1[cur--] = nums1[cur1] < nums2[cur2] ? nums2[cur2--] : nums1[cur1--];
    }
  }
};
// @lc code=end
// [1,21,342]
// [1,321,5434,5243653]
