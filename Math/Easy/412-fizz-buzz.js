// ═══════════════════════════════════════════════════════
// Problem: 412. Fizz Buzz
// Difficulty: Easy
// Topics: Math, String, Simulation
// Runtime: 0 ms (Beats 100.0%)
// Memory: 58.4 MB (Beats 33.7%)
// Submitted: Sep 7, 2026
// Link: https://leetcode.com/problems/fizz-buzz/
// ═══════════════════════════════════════════════════════

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
   let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) { // 15 = 3 * 5
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }
    
    return result;
};
