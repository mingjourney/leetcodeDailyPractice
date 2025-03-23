/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 极端测试用例过不了
var findKthLargest = function(nums, k) {
  const quick_sort = (nums, targetIndex) => {
    const partition = (nums, left, right) => {
      let i = left;
      for (let j = left; j < right; j++) {
        if (nums[j] < nums[right]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          i++;
        }
      }
      [nums[i], nums[right]] = [nums[right], nums[i]];
      return i;
    }
    const randomPartition = (nums, left, right) => {
      const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
      [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];
      return partition(nums, left, right);
    }
    let left = 0, right = nums.length - 1;
    while(left <= right) {
      const index = randomPartition(nums, left, right);
      if (index === targetIndex) {
        return nums[index];
      } else if (index < targetIndex) {
        left = index + 1;
      } else {
        right = index - 1;
      }
    }
  }
  const len = nums.length;
  return quick_sort(nums, len - k);
};
// @lc code=end

