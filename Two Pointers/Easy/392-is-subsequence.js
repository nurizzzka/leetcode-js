// ═══════════════════════════════════════════════════════
// Problem: 392. Is Subsequence
// Difficulty: Easy
// Topics: Two Pointers, String, Dynamic Programming
// Runtime: 3 ms (Beats 17.9%)
// Memory: 55.6 MB (Beats 50.6%)
// Submitted: Sep 3, 2026
// Link: https://leetcode.com/problems/is-subsequence/
// ═══════════════════════════════════════════════════════

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let s1 = 0;
    let t1 = 0;
    let res = '';
    while (s1 < s.length && t1 < t.length) {
        if (s[s1] !== t[t1]) {
          t1++;
        }
        else {
            res += s[s1];
            s1++;
            t1++;
        }
    }
    return res === s ? true : false;
};
