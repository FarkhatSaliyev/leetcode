const maxSlidingWindow = require("./sliding_window_maximum");

describe("maxSlidingWindow", () => {
  test("should return maximum values for each sliding window", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
    expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1]);
  });

  test("should handle window size equal to array length", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 8)).toEqual([7]);
    expect(maxSlidingWindow([1, 2, 3], 3)).toEqual([3]);
    expect(maxSlidingWindow([5], 1)).toEqual([5]);
  });

  test("should handle window size of 1", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1)).toEqual([
      1, 3, -1, -3, 5, 3, 6, 7,
    ]);
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle negative numbers", () => {
    expect(maxSlidingWindow([-1, -3, -5, -7], 2)).toEqual([-1, -3, -5]);
    expect(maxSlidingWindow([-10, -5, -2, -1], 3)).toEqual([-2, -1]);
  });

  test("should handle duplicate numbers", () => {
    expect(maxSlidingWindow([1, 1, 1, 1], 2)).toEqual([1, 1, 1]);
    expect(maxSlidingWindow([2, 2, 2, 2, 2], 3)).toEqual([2, 2, 2]);
  });

  test("should handle increasing sequence", () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    expect(maxSlidingWindow([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 3, 4, 5, 6]);
  });

  test("should handle decreasing sequence", () => {
    expect(maxSlidingWindow([5, 4, 3, 2, 1], 3)).toEqual([5, 4, 3]);
    expect(maxSlidingWindow([6, 5, 4, 3, 2, 1], 2)).toEqual([6, 5, 4, 3, 2]);
  });

  test("should handle edge cases", () => {
    expect(maxSlidingWindow([], 1)).toEqual([]);
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
    expect(maxSlidingWindow([1, 2], 2)).toEqual([2]);
  });

  test("should handle large numbers", () => {
    expect(maxSlidingWindow([1000, 2000, 3000, 4000], 2)).toEqual([
      2000, 3000, 4000,
    ]);
    expect(maxSlidingWindow([999999, 888888, 777777], 2)).toEqual([
      999999, 888888,
    ]);
  });

  test("should handle zero values", () => {
    expect(maxSlidingWindow([0, 0, 0, 0], 2)).toEqual([0, 0, 0]);
    expect(maxSlidingWindow([1, 0, -1, 0], 2)).toEqual([1, 0, 0]);
  });

  test("should handle window size larger than array", () => {
    expect(maxSlidingWindow([1, 2, 3], 5)).toEqual([]);
    expect(maxSlidingWindow([1], 2)).toEqual([]);
  });

  test("should handle complex cases", () => {
    expect(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)).toEqual([
      10, 10, 9, 2,
    ]);
    expect(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)).toEqual([3, 3, 2, 5]);
  });

  test("should handle single element arrays", () => {
    expect(maxSlidingWindow([5], 1)).toEqual([5]);
    expect(maxSlidingWindow([-10], 1)).toEqual([-10]);
  });

  test("should handle two element arrays", () => {
    expect(maxSlidingWindow([1, 2], 1)).toEqual([1, 2]);
    expect(maxSlidingWindow([1, 2], 2)).toEqual([2]);
    expect(maxSlidingWindow([2, 1], 2)).toEqual([2]);
  });
});
