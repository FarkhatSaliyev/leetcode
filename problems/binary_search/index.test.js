const search = require('./index');

describe("Binary Search", () => {
  test("should return correct index when target exists (middle)", () => {
    expect(search([-1, 0, 2, 4, 6, 8], 4)).toBe(3);
  });

  test("should return correct index when target exists (first element)", () => {
    expect(search([-1, 0, 2, 4, 6, 8], -1)).toBe(0);
  });

  test("should return correct index when target exists (last element)", () => {
    expect(search([-1, 0, 2, 4, 6, 8], 8)).toBe(5);
  });

  test("should return -1 when target does not exist", () => {
    expect(search([-1, 0, 2, 4, 6, 8], 5)).toBe(-1);
  });

  test("should return -1 for empty array", () => {
    expect(search([], 1)).toBe(-1);
  });

  test("should work with single-element array (match)", () => {
    expect(search([10], 10)).toBe(0);
  });

  test("should work with single-element array (no match)", () => {
    expect(search([10], 5)).toBe(-1);
  });
});
