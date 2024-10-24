/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let minLen = Infinity; 
  const sums = nums.reduce((acc, cur) => {
    const lastSum = acc.length ? acc[acc.length - 1] : 0;
    acc.push(lastSum + cur);
    return acc;
  }, []);
  for (let i = 0; i < sums.length; i++) {
    if (sums[i] >= target) {
      minLen = Math.min(minLen, i + 1);
      let l = 0, r = i;
      const needMax = sums[i] - target;
      while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (sums[mid] <= needMax) {
          l = mid + 1;
          minLen = Math.min(minLen, i - mid);
        } else {
          r = mid - 1;
        }
      }
    }
  }
  return minLen === Infinity  ? 0 : minLen;
};
// @lc code=end

