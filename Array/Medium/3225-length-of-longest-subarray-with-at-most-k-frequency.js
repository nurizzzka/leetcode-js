// ═══════════════════════════════════════════════════════
// Problem: 3225. Length of Longest Subarray With at Most K Frequency
// Difficulty: Medium
// Topics: Array, Hash Table, Sliding Window
// Runtime: N/A (Beats 0.0%)
// Memory: N/A (Beats 0.0%)
// Submitted: Sep 5, 2026
// Link: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
// ═══════════════════════════════════════════════════════

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
     const countFreq = {};     
    let countExceeding = 0;    
    let result = 0;           
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        const n = nums[right];
        right++;
        countFreq[n] = (countFreq[n] || 0) + 1;
        if (countFreq[n] > k) {
            countExceeding++;
        }
        while (countExceeding > 0) {
            const leftVal = nums[left];
            left++;
            countFreq[leftVal]--;
            if (countFreq[leftVal] === k) {
                countExceeding--;
            }
        }
        result = Math.max(result, right - left);
    }  
    return result;
};
