// ═══════════════════════════════════════════════════════
// Problem: 374. Guess Number Higher or Lower
// Difficulty: Easy
// Topics: Binary Search, Interactive
// Runtime: 35 ms (Beats 90.1%)
// Memory: 53.9 MB (Beats 25.8%)
// Submitted: Sep 3, 2026
// Link: https://leetcode.com/problems/guess-number-higher-or-lower/
// ═══════════════════════════════════════════════════════

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1;
    let r = n;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let pick = guess(mid);
        if (pick === 0) return mid;
        else if (pick === -1) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
};
