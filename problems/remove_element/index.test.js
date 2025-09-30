const removeElement = require('./index');

describe('removeElement', () => {
  test('should remove all instances of val and return correct count', () => {
    const nums1 = [3, 2, 2, 3];
    expect(removeElement(nums1, 3)).toBe(2);
    expect(nums1.slice(0, 2)).toEqual([2, 2]);

    const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(nums2, 2)).toBe(5);
    expect(nums2.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
  });

  test('should handle single element arrays', () => {
    const nums1 = [1];
    expect(removeElement(nums1, 1)).toBe(0);
    expect(nums1.slice(0, 0)).toEqual([]);

    const nums2 = [1];
    expect(removeElement(nums2, 2)).toBe(1);
    expect(nums2.slice(0, 1)).toEqual([1]);
  });

  test('should handle empty array', () => {
    const nums = [];
    expect(removeElement(nums, 1)).toBe(0);
    expect(nums).toEqual([]);
  });

  test('should handle array with all elements to remove', () => {
    const nums = [1, 1, 1, 1];
    expect(removeElement(nums, 1)).toBe(0);
    expect(nums.slice(0, 0)).toEqual([]);
  });

  test('should handle array with no elements to remove', () => {
    const nums = [1, 2, 3, 4];
    expect(removeElement(nums, 5)).toBe(4);
    expect(nums.slice(0, 4)).toEqual([1, 2, 3, 4]);
  });

  test('should handle array with single instance to remove', () => {
    const nums = [1, 2, 3, 4];
    expect(removeElement(nums, 2)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([1, 3, 4]);
  });

  test('should handle array with multiple instances to remove', () => {
    const nums = [1, 2, 2, 3, 2, 4, 2];
    expect(removeElement(nums, 2)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([1, 3, 4]);
  });

  test('should handle array with val at beginning', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(removeElement(nums, 1)).toBe(4);
    expect(nums.slice(0, 4)).toEqual([2, 3, 4, 5]);
  });

  test('should handle array with val at end', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(removeElement(nums, 5)).toBe(4);
    expect(nums.slice(0, 4)).toEqual([1, 2, 3, 4]);
  });

  test('should handle array with val in middle', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(removeElement(nums, 3)).toBe(4);
    expect(nums.slice(0, 4)).toEqual([1, 2, 4, 5]);
  });

  test('should handle array with consecutive vals', () => {
    const nums = [1, 1, 1, 2, 3];
    expect(removeElement(nums, 1)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([2, 3]);
  });

  test('should handle array with alternating vals', () => {
    const nums = [1, 2, 1, 2, 1, 2];
    expect(removeElement(nums, 1)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([2, 2, 2]);
  });

  test('should handle negative numbers', () => {
    const nums = [-1, -2, -3, -1, -4];
    expect(removeElement(nums, -1)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([-2, -3, -4]);
  });

  test('should handle zero', () => {
    const nums = [0, 1, 2, 0, 3];
    expect(removeElement(nums, 0)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([1, 2, 3]);
  });

  test('should handle large numbers', () => {
    const nums = [1000, 2000, 1000, 3000];
    expect(removeElement(nums, 1000)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([2000, 3000]);
  });

  test('should handle array with all same elements', () => {
    const nums = [5, 5, 5, 5, 5];
    expect(removeElement(nums, 5)).toBe(0);
    expect(nums.slice(0, 0)).toEqual([]);
  });

  test('should handle array with two elements', () => {
    const nums1 = [1, 2];
    expect(removeElement(nums1, 1)).toBe(1);
    expect(nums1.slice(0, 1)).toEqual([2]);

    const nums2 = [1, 2];
    expect(removeElement(nums2, 2)).toBe(1);
    expect(nums2.slice(0, 1)).toEqual([1]);

    const nums3 = [1, 1];
    expect(removeElement(nums3, 1)).toBe(0);
    expect(nums3.slice(0, 0)).toEqual([]);
  });

  test('should handle array with three elements', () => {
    const nums = [1, 2, 3];
    expect(removeElement(nums, 2)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([1, 3]);
  });

  test('should handle edge case with val not in array', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(removeElement(nums, 6)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with duplicate elements', () => {
    const nums = [1, 1, 2, 2, 3, 3];
    expect(removeElement(nums, 2)).toBe(4);
    expect(nums.slice(0, 4)).toEqual([1, 1, 3, 3]);
  });

  test('should handle array with val appearing multiple times', () => {
    const nums = [1, 2, 1, 3, 1, 4, 1];
    expect(removeElement(nums, 1)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([2, 3, 4]);
  });
});
