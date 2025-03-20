/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const map = new Map();
  const dfs = (root, left, right) => {
    if (left > right) return null;
    const index = map.get(preorder[root]);
    const node = new TreeNode(preorder[root]);
    node.left = dfs(root + 1, left, index -1);
    node.right = dfs(root + index - left + 1, index + 1, right);
    return node;
  }
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return dfs(0, 0, preorder.length - 1)
};
// @lc code=end

