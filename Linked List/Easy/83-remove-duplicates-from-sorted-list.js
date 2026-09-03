// ═══════════════════════════════════════════════════════
// Problem: 83. Remove Duplicates from Sorted List
// Difficulty: Easy
// Topics: Linked List
// Runtime: 1 ms (Beats 37.0%)
// Memory: 57.2 MB (Beats 78.7%)
// Submitted: Sep 4, 2026
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// ═══════════════════════════════════════════════════════

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let list = head;
  while (list !== null && list.next !== null) {
    if (list.val === list.next.val) list.next = list.next.next;
    else list = list.next;
  }

  return head;
};

