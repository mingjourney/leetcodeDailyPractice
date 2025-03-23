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
var findKthLargest = function(nums, k) {
  const heapify = (arr, index, len) => {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let largestIndex = index;
    if (left < len && arr[left] > arr[largestIndex]) {
      largestIndex = left;
    }
    if (right < len && arr[right] > arr[largestIndex]) {
      largestIndex = right;
    }
    if (largestIndex !== index) {
      [[arr[largestIndex], arr[index]]] = [[arr[index], arr[largestIndex]]]
      heapify(arr, largestIndex, len);
    }
  }
  const sort = (arr) => {
    const len = nums.length;
    for (let j = Math.floor((len - 1) / 2); j >= 0; j--) {
      heapify(nums, j, len);
    }
    for (let j = len - 1; j > len - 1 - k; j--) {
      [arr[j], arr[0]] = [arr[0], arr[j]];
      heapify(nums, 0, j);
    }
  }
  sort(nums);
  return nums[nums.length - k];
};
// @lc code=end

