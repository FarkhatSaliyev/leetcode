const lastStoneWeight = require("./index");

describe("lastStoneWeight (sort-based)", () => {
  test("Example 1", () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  test("All stones destroyed", () => {
    expect(lastStoneWeight([2, 2])).toBe(0);
  });

  test("Single stone remains", () => {
    expect(lastStoneWeight([1])).toBe(1);
  });

  test("Multiple equal stones", () => {
    expect(lastStoneWeight([5, 5, 5, 5])).toBe(0);
  });

  test("Different sizes", () => {
    expect(lastStoneWeight([10, 4, 2, 10])).toBe(2);
  });

  test("Large single stone vs small ones", () => {
    expect(lastStoneWeight([20, 1, 1, 1, 1])).toBe(16);
  });
});
