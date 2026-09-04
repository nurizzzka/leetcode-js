// ═══════════════════════════════════════════════════════
// Problem: 643. Maximum Average Subarray I
// Difficulty: Easy
// Topics: Array, Sliding Window
// Runtime: 3 ms (Beats 56.7%)
// Memory: 68.9 MB (Beats 54.0%)
// Submitted: Sep 4, 2026
// Link: https://leetcode.com/problems/maximum-average-subarray-i/
// ═══════════════════════════════════════════════════════

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sumNum = 0;
  for (let i = 0; i < k; i++) {
    sumNum += nums[i];
  }
  let avg = sumNum;
  for (let r = k; r < nums.length; r++) {
    sumNum += nums[r] - nums[r - k];
    avg = Math.max(avg, sumNum)
  }
  return avg / k;
};

