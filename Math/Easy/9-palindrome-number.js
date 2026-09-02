// ═══════════════════════════════════════════════════════
// Problem: 9. Palindrome Number
// Difficulty: Easy
// Topics: Math
// Runtime: 3 ms (Beats 98.1%)
// Memory: 62.7 MB (Beats 89.9%)
// Submitted: Sep 2, 2026
// Link: https://leetcode.com/problems/palindrome-number/
// ═══════════════════════════════════════════════════════

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;
   

    let backward = 0;
    while (x > backward) {
        backward *= 10;
        backward += x % 10;
        x = Math.trunc(x / 10);
    }
    return x === backward || x === Math.trunc(backward / 10);

};
