const findDuplicate = require('./index');

describe("findDuplicate", () => {
  test("returns the duplicate when there is one", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test("returns the first duplicate encountered", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });

  test("returns null if no duplicates exist", () => {
    expect(findDuplicate([1, 2, 3, 4, 5])).toBeNull();
  });

  test("works with negative numbers", () => {
    expect(findDuplicate([-1, -2, -3, -1])).toBe(-1);
  });

  test("works when duplicate is zero", () => {
    expect(findDuplicate([0, 1, 2, 0])).toBe(0);
  });

  test("returns the duplicate for large input arrays", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    arr.push(9999); // force a duplicate
    expect(findDuplicate(arr)).toBe(9999);
  });
});
