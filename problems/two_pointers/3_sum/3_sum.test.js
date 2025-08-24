const threeSum = require("./3_sum");

test("Example 1: [-1,0,1,2,-1,-4]", () => {
  const result = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(result).toEqual(
    expect.arrayContaining([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  );
  expect(result).toHaveLength(2);
});

test("Example 2: [0,1,1]", () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});

test("Example 3: [0,0,0]", () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

test("Empty array", () => {
  expect(threeSum([])).toEqual([]);
});

test("Less than 3 elements", () => {
  expect(threeSum([1, 2])).toEqual([]);
});

test("All positive numbers", () => {
  expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
});

test("All negative numbers", () => {
  expect(threeSum([-1, -2, -3, -4, -5])).toEqual([]);
});

test("Multiple zeros", () => {
  const result = threeSum([0, 0, 0, 0]);
  expect(result).toEqual([[0, 0, 0]]);
});

test("Complex case with duplicates", () => {
  const result = threeSum([-2, 0, 1, 1, 2]);
  expect(result).toEqual(
    expect.arrayContaining([
      [-2, 0, 2],
      [-2, 1, 1],
    ])
  );
  expect(result).toHaveLength(2);
});

test("Large array", () => {
  const result = threeSum([-1, -1, -1, 0, 0, 0, 1, 1, 1]);
  expect(result).toEqual(
    expect.arrayContaining([
      [-1, 0, 1],
      [0, 0, 0],
    ])
  );
});

test("No solution possible", () => {
  expect(threeSum([1, 2, 3, 4, 5, 6])).toEqual([]);
});
