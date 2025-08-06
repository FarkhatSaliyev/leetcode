const isValid = require("./valid_parentheses");

describe("isValid", () => {
  test("should return true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("({})")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
    expect(isValid("((()))")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
  });

  test("should return false for invalid parentheses", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid(")")).toBe(false);
    expect(isValid("({)")).toBe(false);
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}")).toBe(false);
    expect(isValid("(((")).toBe(false);
    expect(isValid(")))")).toBe(false);
  });

  test("should handle empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("should handle single brackets", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid(")")).toBe(false);
    expect(isValid("[")).toBe(false);
    expect(isValid("]")).toBe(false);
    expect(isValid("{")).toBe(false);
    expect(isValid("}")).toBe(false);
  });

  test("should handle mixed valid cases", () => {
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("({[]})")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
    expect(isValid("(([]))")).toBe(true);
  });

  test("should handle mixed invalid cases", () => {
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}")).toBe(false);
    expect(isValid("(((")).toBe(false);
    expect(isValid(")))")).toBe(false);
    expect(isValid("([)]")).toBe(false);
  });

  test("should handle nested brackets", () => {
    expect(isValid("((()))")).toBe(true);
    expect(isValid("[[[]]]")).toBe(true);
    expect(isValid("{{{}}}")).toBe(true);
    expect(isValid("(((")).toBe(false);
    expect(isValid(")))")).toBe(false);
  });

  test("should handle complex nested cases", () => {
    expect(isValid("{[()]}")).toBe(true);
    expect(isValid("({[]})")).toBe(true);
    expect(isValid("[[{()}]]")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
  });

  test("should handle edge cases", () => {
    expect(isValid("")).toBe(true);
    expect(isValid("a")).toBe(false);
    expect(isValid("()a")).toBe(false);
    expect(isValid("a()")).toBe(false);
  });

  test("should handle unbalanced cases", () => {
    expect(isValid("(()")).toBe(false);
    expect(isValid("())")).toBe(false);
    expect(isValid("{[")).toBe(false);
    expect(isValid("]}")).toBe(false);
  });

  test("should handle wrong order cases", () => {
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}")).toBe(false);
    expect(isValid("(]")).toBe(false);
    expect(isValid("[)")).toBe(false);
  });
});
