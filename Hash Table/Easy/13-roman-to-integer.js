// ═══════════════════════════════════════════════════════
// Problem: 13. Roman to Integer
// Difficulty: Easy
// Topics: Hash Table, Math, String
// Runtime: 4 ms (Beats 73.6%)
// Memory: 60 MB (Beats 91.7%)
// Submitted: Sep 8, 2026
// Link: https://leetcode.com/problems/roman-to-integer/
// ═══════════════════════════════════════════════════════

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;

    for (let i=0;i<s.length;i++) {
        const cur = symbols[s[i]];
        const next = symbols[s[i+1]];
        if (cur < next) result-=cur;
        else result+=cur;
    }
    return result;
};
