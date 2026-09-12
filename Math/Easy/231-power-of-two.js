// ═══════════════════════════════════════════════════════
// Problem: 231. Power of Two
// Difficulty: Easy
// Topics: Math, Bit Manipulation, Recursion
// Runtime: 0 ms (Beats 100.0%)
// Memory: 54.7 MB (Beats 95.8%)
// Submitted: Sep 13, 2026
// Link: https://leetcode.com/problems/power-of-two/
// ═══════════════════════════════════════════════════════

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
};
