// ═══════════════════════════════════════════════════════
// Problem: 20. Valid Parentheses
// Difficulty: Easy
// Topics: String, Stack, Bracket Sequences
// Runtime: 3 ms (Beats 70.2%)
// Memory: 55.8 MB (Beats 47.2%)
// Submitted: Sep 2, 2026
// Link: https://leetcode.com/problems/valid-parentheses/
// ═══════════════════════════════════════════════════════

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for(let char of s){
        if (char === '(' || char === '[' || char === '{') stack.push(char);
        else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) return false;
        }
    };
    return stack.length === 0;
};
