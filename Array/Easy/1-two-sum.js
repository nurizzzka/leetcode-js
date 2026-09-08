// ═══════════════════════════════════════════════════════
// Problem: 1. Two Sum
// Difficulty: Easy
// Topics: Array, Hash Table
// Runtime: 1 ms (Beats 88.9%)
// Memory: 55.4 MB (Beats 37.8%)
// Submitted: Sep 8, 2026
// Link: https://leetcode.com/problems/two-sum/
// ═══════════════════════════════════════════════════════

const twoSum = function(nums, target) {
    const d = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        if (d.has(num)) {
            return [d.get(num), i];
        }
        d.set(nums[i], i);
    }
     return [];
    
    
    };
