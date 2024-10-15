/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reverse = 0;
  while (x > reverse) {
    reverse = reverse * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === reverse || Math.floor(reverse / 10) === x; 
};
// var isPalindrome = function(x) {
//   const str = x.toString();
//   let l = 0, r = str.length - 1;
//   while(l < r) {
//     if (str[l++] !== str[r--]) {
//       return false;
//     }
//   }
//   return true;
// };
// @lc code=end

