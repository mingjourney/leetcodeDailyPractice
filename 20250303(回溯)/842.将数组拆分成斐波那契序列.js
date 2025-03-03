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
  const dfs = (start, path) => {
    const len = path.length;
    if (len > 2 && path[len - 3] + path[len - 2] !== path[len - 1] ) return [];
    if (start === num.length) {
      if (len > 2) {
        return [...path];   
      } else {
        return [];
      }
    }
    let cur = 0, ans = [];
    for (let i = start; i < num.length; i++) {
      if (i > start && num[start] === '0') return [];
      cur = cur * 10 + Number(num[i]);
      if (cur > Math.pow(2, 31) + 1) return [];
      path.push(cur);
      ans = dfs(i + 1, path);
      if (ans.length > 2) return ans;
      path.pop();
    }
    return ans;
  }
  return dfs(0, [])
};
// const b = splitIntoFibonacci(a);
// console.log('b', b);
// @lc code=end

