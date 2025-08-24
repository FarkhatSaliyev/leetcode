const MinStack = require("./minimum_stack");

describe("MinStack", () => {
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  describe("constructor", () => {
    test("should create an empty stack", () => {
      expect(minStack.head).toBe(null);
    });
  });

  describe("push", () => {
    test("should push single element", () => {
      minStack.push(5);
      expect(minStack.head.val).toBe(5);
      expect(minStack.head.min).toBe(5);
    });

    test("should push multiple elements and track minimum", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(7);

      expect(minStack.head.val).toBe(7);
      expect(minStack.head.min).toBe(3);
    });

    test("should handle negative numbers", () => {
      minStack.push(-5);
      minStack.push(3);
      minStack.push(-10);

      expect(minStack.head.val).toBe(-10);
      expect(minStack.head.min).toBe(-10);
    });

    test("should handle duplicate minimum values", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(3);

      expect(minStack.head.val).toBe(3);
      expect(minStack.head.min).toBe(3);
    });

    test("should handle zero values", () => {
      minStack.push(0);
      minStack.push(5);
      minStack.push(-1);

      expect(minStack.head.val).toBe(-1);
      expect(minStack.head.min).toBe(-1);
    });
  });

  describe("pop", () => {
    test("should return null when popping from empty stack", () => {
      expect(minStack.pop()).toBe(null);
    });

    test("should pop single element", () => {
      minStack.push(5);
      minStack.pop();
      expect(minStack.head).toBe(null);
    });

    test("should pop multiple elements and maintain minimum tracking", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(7);

      minStack.pop(); // pop 7
      expect(minStack.head.val).toBe(3);
      expect(minStack.head.min).toBe(3);

      minStack.pop(); // pop 3
      expect(minStack.head.val).toBe(5);
      expect(minStack.head.min).toBe(5);
    });

    test("should handle popping when minimum changes", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(7);
      minStack.push(1);

      minStack.pop(); // pop 1 (was minimum)
      expect(minStack.head.val).toBe(7);
      expect(minStack.head.min).toBe(3);
    });
  });

  describe("top", () => {
    test("should return null when stack is empty", () => {
      expect(minStack.top()).toBe(null);
    });

    test("should return top element", () => {
      minStack.push(5);
      expect(minStack.top()).toBe(5);
    });

    test("should return top element after multiple pushes", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(7);
      expect(minStack.top()).toBe(7);
    });

    test("should return correct top after pop", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.pop();
      expect(minStack.top()).toBe(5);
    });
  });

  describe("getMin", () => {
    test("should return null when stack is empty", () => {
      expect(minStack.getMin()).toBe(null);
    });

    test("should return minimum for single element", () => {
      minStack.push(5);
      expect(minStack.getMin()).toBe(5);
    });

    test("should return minimum for multiple elements", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(7);
      expect(minStack.getMin()).toBe(3);
    });

    test("should return updated minimum after pop", () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(7);
      minStack.push(1);

      minStack.pop(); // pop 1
      expect(minStack.getMin()).toBe(3);

      minStack.pop(); // pop 7
      expect(minStack.getMin()).toBe(3);

      minStack.pop(); // pop 3
      expect(minStack.getMin()).toBe(5);
    });

    test("should handle negative minimum", () => {
      minStack.push(5);
      minStack.push(-3);
      minStack.push(7);
      expect(minStack.getMin()).toBe(-3);
    });

    test("should handle zero as minimum", () => {
      minStack.push(5);
      minStack.push(0);
      minStack.push(7);
      expect(minStack.getMin()).toBe(0);
    });
  });

  describe("integration tests", () => {
    test("should work with LeetCode example", () => {
      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);

      expect(minStack.getMin()).toBe(-3);

      minStack.pop();
      expect(minStack.top()).toBe(0);
      expect(minStack.getMin()).toBe(-2);
    });

    test("should handle complex sequence of operations", () => {
      minStack.push(10);
      expect(minStack.getMin()).toBe(10);
      expect(minStack.top()).toBe(10);

      minStack.push(5);
      expect(minStack.getMin()).toBe(5);
      expect(minStack.top()).toBe(5);

      minStack.push(15);
      expect(minStack.getMin()).toBe(5);
      expect(minStack.top()).toBe(15);

      minStack.push(2);
      expect(minStack.getMin()).toBe(2);
      expect(minStack.top()).toBe(2);

      minStack.pop();
      expect(minStack.getMin()).toBe(5);
      expect(minStack.top()).toBe(15);

      minStack.pop();
      expect(minStack.getMin()).toBe(5);
      expect(minStack.top()).toBe(5);

      minStack.pop();
      expect(minStack.getMin()).toBe(10);
      expect(minStack.top()).toBe(10);
    });

    test("should handle all same values", () => {
      minStack.push(5);
      minStack.push(5);
      minStack.push(5);

      expect(minStack.getMin()).toBe(5);
      expect(minStack.top()).toBe(5);

      minStack.pop();
      expect(minStack.getMin()).toBe(5);
      expect(minStack.top()).toBe(5);
    });

    test("should handle descending values", () => {
      minStack.push(5);
      minStack.push(4);
      minStack.push(3);
      minStack.push(2);
      minStack.push(1);

      expect(minStack.getMin()).toBe(1);
      expect(minStack.top()).toBe(1);

      minStack.pop();
      expect(minStack.getMin()).toBe(2);
      expect(minStack.top()).toBe(2);
    });

    test("should handle ascending values", () => {
      minStack.push(1);
      minStack.push(2);
      minStack.push(3);
      minStack.push(4);
      minStack.push(5);

      expect(minStack.getMin()).toBe(1);
      expect(minStack.top()).toBe(5);

      minStack.pop();
      expect(minStack.getMin()).toBe(1);
      expect(minStack.top()).toBe(4);
    });
  });

  describe("edge cases", () => {
    test("should handle large numbers", () => {
      minStack.push(1000000);
      minStack.push(999999);
      minStack.push(1000001);

      expect(minStack.getMin()).toBe(999999);
      expect(minStack.top()).toBe(1000001);
    });

    test("should handle very small numbers", () => {
      minStack.push(-1000000);
      minStack.push(-999999);
      minStack.push(-1000001);

      expect(minStack.getMin()).toBe(-1000001);
      expect(minStack.top()).toBe(-1000001);
    });

    test("should handle empty stack operations", () => {
      expect(minStack.pop()).toBe(null);
      expect(minStack.top()).toBe(null);
      expect(minStack.getMin()).toBe(null);
    });

    test("should handle multiple pops on empty stack", () => {
      minStack.push(5);
      minStack.pop();
      expect(minStack.pop()).toBe(null);
      expect(minStack.top()).toBe(null);
      expect(minStack.getMin()).toBe(null);
    });
  });
});
