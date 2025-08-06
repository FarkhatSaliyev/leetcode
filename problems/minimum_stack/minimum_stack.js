class Node {
  constructor(val, min) {
    this.val = val;
    this.next = null;
    this.min = min;
  }
}

// Visuallization
// [
//     head = 5
//     5, next = 3
//     newMin = 3 ? 3 : 5

//     head = 3
//     3, next = null
//     newMin = 3
//.    this.head.min = 3
// ]

class MinStack {
  constructor() {
    this.head = null;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    const newMin = this.head ? Math.min(val, this.head.min) : val;
    const newNode = new Node(val, newMin);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @return {void}
   */
  pop() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  /**
   * @return {number}
   */
  top() {
    if (!this.head) return null;
    return this.head.val;
  }

  /**
   * @return {number}
   */
  getMin() {
    if (!this.head) return null;
    return this.head.min;
  }
}

module.exports = MinStack;
