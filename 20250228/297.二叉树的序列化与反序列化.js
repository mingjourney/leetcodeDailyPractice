/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 
var serialize = function(root) {
  return mySerialize(root, '');
};

var mySerialize = function(root, str) {
  if (root === null) {
    str += 'None,';
  } else {
    str += root.val  + ',';
    str = mySerialize(root.left, str);
    str = mySerialize(root.right, str);
  }
  return str;
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const dataArray = data.split(",");
  return myDeserialize(dataArray);
};

var myDeserialize = function(dataArray) {
  if (dataArray[0] === 'None') {
    dataArray.shift();
    return null;
  }    
  const root = new TreeNode(parseInt(dataArray[0]));
  dataArray.shift();
  root.left = myDeserialize(dataArray);
  root.right = myDeserialize(dataArray);
  return root;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

