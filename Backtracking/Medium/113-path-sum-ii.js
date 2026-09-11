// ═══════════════════════════════════════════════════════
// Problem: 113. Path Sum II
// Difficulty: Medium
// Topics: Backtracking, Tree, Depth-First Search, Binary Tree
// Runtime: 1 ms (Beats 85.7%)
// Memory: 59.3 MB (Beats 37.1%)
// Submitted: Sep 11, 2026
// Link: https://leetcode.com/problems/path-sum-ii/
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
 let result = [];
    
    function dfs(node, remaining, path) {
        if (node === null) return;
        
        path.push(node.val);
        remaining -= node.val;
        
        if (node.left === null && node.right === null && remaining === 0) {
            result.push([...path]);
        }
        
        dfs(node.left, remaining, path);
        dfs(node.right, remaining, path);
        
        path.pop(); 
    }
    
    dfs(root, targetSum, []);
    return result;
};
