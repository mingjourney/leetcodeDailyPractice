/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} num
 * @return {number[]}
 */
// const a = '123456579';
var splitIntoFibonacci = function(num) {
    var backStack = function(start, path) {
      if (path.length > 2 && path[path.length - 2] + path[path.length - 3] != path[path.length - 1]) {
        return [];
      }
      if (start >= num.length) {
        if (path.length > 2) {
          return path;
        }
        return [];
      }
      let cur = 0, ans = [];
      for (let i = start; i < num.length; i++) {
        if (i > start && num[start] == '0') return [];
        // console.log('start', start, 'i' , i);
        cur = cur * 10 + Number(num[i]);
        // console.log('cur', cur);
        if (cur > Math.pow(2, 31)) return [];

        path.push(cur);
        // console.log('path', path);
        ans = backStack(i + 1, path);
        // console.log('ans', ans);
        if (ans.length > 2) return ans;
        path.pop();
      }
      return ans;
    }
    return backStack(0, []);
};
// const b = splitIntoFibonacci(a);
// console.log('b', b);
// @lc code=end

