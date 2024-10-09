/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const hash = new Map();
  const res = [];
  for (let num of nums1) {
    hash.set(num, (hash.get(num) || 0)+ 1);
  }
  for (let num of nums2) {
    if (hash.get(num) > 0) {
      hash.set(num, (hash.get(num) || 0)- 1);
      res.push(num);
    }
  }
  return res;
};
// @lc code=end

