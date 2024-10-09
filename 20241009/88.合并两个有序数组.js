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
  let curInsertPosition = m + n - 1;
  let curNums1 = m - 1;
  let curNums2 = n - 1;
  while (curNums2 >= 0) {
    if (curNums1 < 0 || nums1[curNums1] <= nums2[curNums2]) {
      nums1[curInsertPosition--] = nums2[curNums2--]
    } else {
      nums1[curInsertPosition--] = nums1[curNums1--]
    }
  } 
};
// @lc code=end

// var merge = function(nums1, m, nums2, n) {
//   let curInsertPosition = m + n - 1;
//   let curNums1 = m - 1;
//   let curNums2 = n - 1;
//   while (curNums1 >= 0 || curNums2 >= 0) {
//     if (curNums2 < 0 || nums1[curNums1] >= nums2[curNums2]) {
//       nums1[curInsertPosition--] = nums1[curNums1--]
//     } else {
//       nums1[curInsertPosition--] = nums2[curNums2--]
//     }
//   } 
// };