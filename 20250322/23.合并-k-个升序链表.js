/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  class Heap {
    constructor() {
      this.heap = [];
    }
    isEmpty() {
      return this.heap.length === 0;
    }
    siftDown(index) {
      let smallestIndex = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      if (left < this.heap.length && this.heap[smallestIndex].val > this.heap[left].val) {
        smallestIndex = left;
      }
      if (right < this.heap.length && this.heap[smallestIndex].val > this.heap[right].val) {
        smallestIndex = right;
      }
      if (smallestIndex !== index) {
        [this.heap[smallestIndex], this.heap[index]] = [this.heap[index], this.heap[smallestIndex]];
        this.siftDown(smallestIndex);
      }
    }
    siftUp(index) {
      if (index <= 0) return;
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val < this.heap[parentIndex].val) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.siftUp(parentIndex);
      }
    }
    insert(num) {
      this.heap.push(num);
      this.siftUp(this.heap.length - 1);
    }
    getTop() {
      if (this.isEmpty()) return null;
      const min = this.heap[0];
      const last = this.heap.pop();
      if (!this.isEmpty()) {
        this.heap[0] = last;
        this.siftDown(0);
      }
      return min;
    }
  }
  const minHeap = new Heap();
  const dummy = new ListNode(0);
  let cur = dummy;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      minHeap.insert(lists[i]);
    }
  }
  while (!minHeap.isEmpty()) {
    const node = minHeap.getTop();
    cur.next = node;
    cur = cur.next;
    if (node.next) {
      minHeap.insert(node.next);
    }
  }
  return dummy.next;
};
// @lc code=end

