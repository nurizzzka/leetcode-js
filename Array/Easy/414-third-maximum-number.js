// ═══════════════════════════════════════════════════════
// Problem: 414. Third Maximum Number
// Difficulty: Easy
// Topics: Array, Sorting
// Runtime: 3 ms (Beats 44.6%)
// Memory: 56.7 MB (Beats 32.1%)
// Submitted: Sep 9, 2026
// Link: https://leetcode.com/problems/third-maximum-number/
// ═══════════════════════════════════════════════════════

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let num of nums) {
        if (num === first || num === second || num === third) {
            continue;
        }
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }
    return third === -Infinity ? first : third;
};
