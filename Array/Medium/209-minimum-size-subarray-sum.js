// ═══════════════════════════════════════════════════════
// Problem: 209. Minimum Size Subarray Sum
// Difficulty: Medium
// Topics: Array, Binary Search, Sliding Window, Prefix Sum
// Runtime: 3 ms (Beats 74.3%)
// Memory: 58.4 MB (Beats 89.7%)
// Submitted: Sep 5, 2026
// Link: https://leetcode.com/problems/minimum-size-subarray-sum/
// ═══════════════════════════════════════════════════════

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let l = 0;
    let sum = 0;
    let minLen = nums.length + 1;
    
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        
        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }
    
    return minLen === nums.length + 1 ? 0 : minLen;
};

