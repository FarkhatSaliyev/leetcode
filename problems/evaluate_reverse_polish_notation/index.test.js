const evalRPN = require("./index");

describe("evalRPN", () => {
  test("Basic addition", () => {
    expect(evalRPN(["2", "3", "+"])).toBe(5);
  });

  test("Basic subtraction", () => {
    expect(evalRPN(["5", "3", "-"])).toBe(2);
  });

  test("Basic multiplication", () => {
    expect(evalRPN(["4", "3", "*"])).toBe(12);
  });

  test("Basic division", () => {
    expect(evalRPN(["10", "2", "/"])).toBe(5);
  });

  test("Division with truncation", () => {
    expect(evalRPN(["7", "2", "/"])).toBe(3);
  });

  test("Complex expression: (1 + 2) * 4", () => {
    expect(evalRPN(["1", "2", "+", "4", "*"])).toBe(12);
  });

  test("Complex expression: (10 - 6) / 2", () => {
    expect(evalRPN(["10", "6", "-", "2", "/"])).toBe(2);
  });

  test("Complex expression: 2 * 3 + 4", () => {
    expect(evalRPN(["2", "3", "*", "4", "+"])).toBe(10);
  });

  test("Complex expression: 15 - 7 * 2", () => {
    expect(evalRPN(["15", "7", "2", "*", "-"])).toBe(1);
  });

  test("Multiple operations: ((2 + 1) * 3) - 4", () => {
    expect(evalRPN(["2", "1", "+", "3", "*", "4", "-"])).toBe(5);
  });

  test("Single number", () => {
    expect(evalRPN(["42"])).toBe(42);
  });

  test("Negative numbers", () => {
    expect(evalRPN(["-2", "3", "+"])).toBe(1);
  });

  test("Zero operations", () => {
    expect(evalRPN(["0", "5", "+"])).toBe(5);
    expect(evalRPN(["5", "0", "*"])).toBe(0);
  });

  test("Large numbers", () => {
    expect(evalRPN(["1000", "500", "+"])).toBe(1500);
  });

  test("Decimal numbers (should be truncated for division)", () => {
    expect(evalRPN(["5", "2", "/"])).toBe(2);
  });

  test("Complex nested operations", () => {
    // ((4 + 5) * (2 - 1)) / 3 = (9 * 1) / 3 = 3
    expect(evalRPN(["4", "5", "+", "2", "1", "-", "*", "3", "/"])).toBe(3);
  });

  test("All four operations in sequence", () => {
    // 10 + 5 - 3 * 2 / 4 = 15 - 6 / 4 = 15 - 1 = 14
    expect(evalRPN(["10", "5", "+", "3", "2", "*", "4", "/", "-"])).toBe(14);
  });
});
