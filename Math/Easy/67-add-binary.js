// ═══════════════════════════════════════════════════════
// Problem: 67. Add Binary
// Difficulty: Easy
// Topics: Math, String, Bit Manipulation, Simulation
// Runtime: 0 ms (Beats 100.0%)
// Memory: 53.9 MB (Beats 92.7%)
// Submitted: Sep 2, 2026
// Link: https://leetcode.com/problems/add-binary/
// ═══════════════════════════════════════════════════════

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let a1 = BigInt('0b' + a);
    let b1 = BigInt('0b' + b);
    return (a1 + b1).toString(2);
};
