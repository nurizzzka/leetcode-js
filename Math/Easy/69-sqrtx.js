// ═══════════════════════════════════════════════════════
// Problem: 69. Sqrt(x)
// Difficulty: Easy
// Topics: Math, Binary Search, Newton's Method
// Runtime: 2 ms (Beats 41.7%)
// Memory: 54.5 MB (Beats 97.6%)
// Submitted: Sep 2, 2026
// Link: https://leetcode.com/problems/sqrtx/
// ═══════════════════════════════════════════════════════

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x; 
    let left = 0;
    let right = x;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sqr = mid * mid;
        if (sqr === x) return mid;
        else if (sqr < x) left = mid + 1;
        else right = mid - 1;
    }

    return right;
};
