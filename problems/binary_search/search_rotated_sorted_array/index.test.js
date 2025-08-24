const search = require("./index");

describe("search in rotated sorted array", () => {
  test("finds target in middle of rotated array", () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
  });

  test("finds target at beginning of rotated array", () => {
    expect(search([4,5,6,7,0,1,2], 4)).toBe(0);
  });

  test("finds target at end of rotated array", () => {
    expect(search([4,5,6,7,0,1,2], 2)).toBe(6);
  });

  test("returns -1 when target is not in array", () => {
    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
  });

  test("works when array is not rotated", () => {
    expect(search([1,2,3,4,5,6,7], 3)).toBe(2);
  });

  test("works with single element - found", () => {
    expect(search([1], 1)).toBe(0);
  });

  test("works with single element - not found", () => {
    expect(search([1], 2)).toBe(-1);
  });

  test("works with two elements - target first", () => {
    expect(search([3,1], 3)).toBe(0);
  });

  test("works with two elements - target second", () => {
    expect(search([3,1], 1)).toBe(1);
  });

  test("works with large rotated array", () => {
    const nums = [15,16,19,20,25,1,3,4,5,7,10,14];
    expect(search(nums, 5)).toBe(8);
    expect(search(nums, 15)).toBe(0);
    expect(search(nums, 14)).toBe(11);
    expect(search(nums, 100)).toBe(-1);
  });
});
