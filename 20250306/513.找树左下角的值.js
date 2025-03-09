/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  const cur = [root];
  let node = root;
  while (cur.length) {    
    node = cur.shift();
    if (node.right) cur.push(node.right);
    if (node.left) cur.push(node.left);
  }
  return node.val;
};
// @lc code=end

