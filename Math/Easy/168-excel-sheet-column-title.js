// ═══════════════════════════════════════════════════════
// Problem: 168. Excel Sheet Column Title
// Difficulty: Easy
// Topics: Math, String
// Runtime: 0 ms (Beats 100.0%)
// Memory: 53.7 MB (Beats 32.1%)
// Submitted: Sep 8, 2026
// Link: https://leetcode.com/problems/excel-sheet-column-title/
// ═══════════════════════════════════════════════════════

/**
 * @param {number} columnNumber
 * @return {string}
 */

var convertToTitle = function(columnNumber) {
   let result = '';
    while (columnNumber > 0) {
        columnNumber--;
        result = String.fromCharCode((columnNumber % 26) + 65) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};
