// ═══════════════════════════════════════════════════════
// Problem: 14. Longest Common Prefix
// Difficulty: Easy
// Topics: Array, String, Trie
// Runtime: 61 ms (Beats 5.9%)
// Memory: 54.6 MB (Beats 42.0%)
// Submitted: Sep 8, 2026
// Link: https://leetcode.com/problems/longest-common-prefix/
// ═══════════════════════════════════════════════════════

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    for(let i=0;i<=strs[0].length;i++){
        let char = strs[0][i];
        for(let j=1;j<strs.length;j++){
            if(i === strs[j].length || strs[j][i] !== char ){
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
