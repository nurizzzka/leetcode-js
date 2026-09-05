// ═══════════════════════════════════════════════════════
// Problem: 209. Minimum Size Subarray Sum
// Difficulty: Medium
// Topics: Array, Binary Search, Sliding Window, Prefix Sum
// Runtime: N/A (Beats 0.0%)
// Memory: N/A (Beats 0.0%)
// Submitted: Sep 5, 2026
// Link: https://leetcode.com/problems/minimum-size-subarray-sum/
// ═══════════════════════════════════════════════════════

var minSubArrayLen = function(target, nums) {
    let l = 0;
    let sum = 0;
    let minLen = Infinity; // ← исправлено!
    
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        
        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }
    
    return minLen === Infinity ? 0 : minLen;
};
