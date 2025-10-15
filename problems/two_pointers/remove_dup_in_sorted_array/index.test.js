const removeDuplicates = require('./index');

describe('removeDuplicates', () => {
  test('should remove duplicates and return correct count (basic case)', () => {
    const nums = [0, 1, 1, 2, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3]);
  });

  test('should handle array with all unique elements', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with all duplicates', () => {
    const nums = [2, 2, 2, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([2]);
  });

  test('should handle single element array', () => {
    const nums = [10];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([10]);
  });

  test('should handle empty array', () => {
    const nums = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  test('should modify array in-place (same reference)', () => {
    const nums = [1, 1, 2, 2, 3];
    const ref = nums;
    removeDuplicates(nums);
    expect(nums).toBe(ref); // same array reference
  });
});
