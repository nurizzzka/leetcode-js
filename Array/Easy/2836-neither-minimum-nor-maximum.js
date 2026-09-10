// ═══════════════════════════════════════════════════════
// Problem: 2836. Neither Minimum nor Maximum
// Difficulty: Easy
// Topics: Array, Sorting
// Runtime: 14 ms (Beats 35.0%)
// Memory: 67 MB (Beats 5.0%)
// Submitted: Sep 10, 2026
// Link: https://leetcode.com/problems/neither-minimum-nor-maximum/
// ═══════════════════════════════════════════════════════

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length < 3) return -1;
    
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    
    for (let num of nums) {
        if (num !== min && num !== max) {
            return num;
        }
    }
    
    return -1;
};
