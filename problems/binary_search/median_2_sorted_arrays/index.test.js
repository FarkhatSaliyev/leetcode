const findMedianSortedArrays = require("./index");

describe("findMedianSortedArrays", () => {
  test("both arrays have odd total length", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test("both arrays have even total length", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("arrays with different sizes", () => {
    expect(findMedianSortedArrays([1, 3, 8], [7, 9, 10, 11])).toBe(8);
  });

  test("one array is empty", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
  });

  test("both arrays empty should return NaN or error", () => {
    expect(findMedianSortedArrays([], [])).toBeNaN();
  });

  test("negative numbers included", () => {
    expect(findMedianSortedArrays([-5, -3, -1], [1, 3, 5])).toBe(0);
  });

  test("arrays with duplicate values", () => {
    expect(findMedianSortedArrays([1, 2, 2], [2, 2, 3])).toBe(2);
  });

  test("arrays where nums1 is bigger than nums2", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6])).toBe(3.5);
  });
});
