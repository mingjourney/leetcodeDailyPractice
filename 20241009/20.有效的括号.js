/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const matchMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack = [];
  for (let c of s) {
    if (matchMap[c]) {
      if (stack.pop() !== matchMap[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};
// @lc code=end

// var isValid = function(s) {
//   const matchMap = {
//     '}': '{',
//     ']': '[',
//     ')': '(',
//   };
//   const stack = [];
//   for (let c of s) {
//     if (!matchMap[c]) {
//       stack.push(c);
//     } else {
//       if (stack[stack.length - 1] === matchMap[c]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   if (stack.length) {
//     return false;
//   }
//   return true;
// };