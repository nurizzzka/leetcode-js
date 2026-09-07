// ═══════════════════════════════════════════════════════
// Problem: 136. Single Number
// Difficulty: Easy
// Topics: Array, Bit Manipulation
// Runtime: 3 ms (Beats 46.7%)
// Memory: 58.7 MB (Beats 20.9%)
// Submitted: Sep 7, 2026
// Link: https://leetcode.com/problems/single-number/
// ═══════════════════════════════════════════════════════

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num; 
    }
    return result;
};
