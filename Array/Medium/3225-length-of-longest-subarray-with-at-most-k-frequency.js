// ═══════════════════════════════════════════════════════
// Problem: 3225. Length of Longest Subarray With at Most K Frequency
// Difficulty: Medium
// Topics: Array, Hash Table, Sliding Window
// Runtime: 51 ms (Beats 87.6%)
// Memory: 75.2 MB (Beats 25.2%)
// Submitted: Sep 5, 2026
// Link: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
// ═══════════════════════════════════════════════════════

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let l = 0;
    let maxLen = 0;
    let map = new Map();
    for (let r = 0;r<nums.length;r++) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);
        while (map.get(nums[r]) > k){
            map.set(nums[l], map.get(nums[l]) - 1);
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};
