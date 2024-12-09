/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let vote = 0, x = 0;
    for (const num of nums) {
      if (vote === 0) x = num;
      vote += num === x ? 1 : -1;
    }
    return x;
};
// @lc code=end

