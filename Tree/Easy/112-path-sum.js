// ═══════════════════════════════════════════════════════
// Problem: 112. Path Sum
// Difficulty: Easy
// Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
// Runtime: 0 ms (Beats 100.0%)
// Memory: 57.7 MB (Beats 70.6%)
// Submitted: Sep 11, 2026
// Link: https://leetcode.com/problems/path-sum/
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }
    let remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};
