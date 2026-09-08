// ═══════════════════════════════════════════════════════
// Problem: 108. Convert Sorted Array to Binary Search Tree
// Difficulty: Easy
// Topics: Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree
// Runtime: 1 ms (Beats 85.1%)
// Memory: 58.1 MB (Beats 45.1%)
// Submitted: Sep 8, 2026
// Link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// ═══════════════════════════════════════════════════════

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
      function build(left, right) {
        if (left > right) return null;
        
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid]);
        
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        
        return node;
    }
    
    return build(0, nums.length - 1);
};
