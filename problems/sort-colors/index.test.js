const sortColors = require('./index');

describe('sortColors (merge sort version)', () => {
  test('should sort an unsorted array correctly', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('should handle already sorted array', () => {
    const nums = [0, 0, 1, 1, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('should handle single element array', () => {
    const nums = [1];
    sortColors(nums);
    expect(nums).toEqual([1]);
  });

  test('should handle empty array', () => {
    const nums = [];
    sortColors(nums);
    expect(nums).toEqual([]);
  });

  test('should modify the array in-place (same reference)', () => {
    const nums = [2, 1, 0];
    const ref = nums;
    sortColors(nums);
    expect(nums).toBe(ref);
    expect(nums).toEqual([0, 1, 2]);
  });
});
