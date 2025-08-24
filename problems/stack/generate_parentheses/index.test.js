const generateParenthesis = require("./index");

describe("generateParenthesis", () => {
  test("n = 1 should return ['()']", () => {
    const result = generateParenthesis(1);
    expect(result).toEqual(["()"]);
    expect(result).toHaveLength(1);
  });

  test("n = 2 should return ['(())', '()()']", () => {
    const result = generateParenthesis(2);
    expect(result).toEqual(expect.arrayContaining(["(())", "()()"]));
    expect(result).toHaveLength(2);
  });

  test("n = 3 should return 5 valid combinations", () => {
    const result = generateParenthesis(3);
    const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toHaveLength(5);
  });

  test("n = 0 should return empty array", () => {
    const result = generateParenthesis(0);
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  test("n = 4 should return 14 valid combinations", () => {
    const result = generateParenthesis(4);
    // Catalan number C(4) = 14
    expect(result).toHaveLength(14);

    // Check that all results are valid parentheses
    result.forEach((combination) => {
      expect(isValidParentheses(combination)).toBe(true);
    });
  });

  test("all generated combinations should be valid parentheses", () => {
    const testCases = [1, 2, 3, 4];

    testCases.forEach((n) => {
      const result = generateParenthesis(n);
      result.forEach((combination) => {
        expect(isValidParentheses(combination)).toBe(true);
        expect(combination.length).toBe(2 * n);
      });
    });
  });

  test("all combinations should have correct length", () => {
    const testCases = [1, 2, 3, 4];

    testCases.forEach((n) => {
      const result = generateParenthesis(n);
      result.forEach((combination) => {
        expect(combination.length).toBe(2 * n);
      });
    });
  });

  test("should not contain duplicates", () => {
    const testCases = [1, 2, 3, 4];

    testCases.forEach((n) => {
      const result = generateParenthesis(n);
      const uniqueSet = new Set(result);
      expect(uniqueSet.size).toBe(result.length);
    });
  });
});

// Helper function to validate parentheses
function isValidParentheses(s) {
  const stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
