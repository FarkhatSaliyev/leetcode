const subarraySum = require('./index');

describe('subarraySum', () => {
  test('should count all subarrays that sum to k (basic case)', () => {
    const nums = [1, 1, 1];
    const k = 2;
    const result = subarraySum(nums, k);
    expect(result).toBe(2); // [1,1] at indices (0,1) and (1,2)
  });

  test('should handle positive and negative numbers', () => {
    const nums = [2, -1, 1, 2];
    const k = 2;
    const result = subarraySum(nums, k);
    expect(result).toBe(4); // [2], [2,-1,1], [-1,1,2] [2]
  });

  test('should handle zero k with positive and negative values', () => {
    const nums = [1, -1, 1, -1];
    const k = 0;
    const result = subarraySum(nums, k);
    expect(result).toBe(4); // [1,-1], [1,-1,1,-1], etc.
  });

  test('should handle array with single element equal to k', () => {
    const nums = [5];
    const k = 5;
    const result = subarraySum(nums, k);
    expect(result).toBe(1);
  });

  test('should handle array with single element not equal to k', () => {
    const nums = [3];
    const k = 5;
    const result = subarraySum(nums, k);
    expect(result).toBe(0);
  });

  test('should handle all zeros', () => {
    const nums = [0, 0, 0];
    const k = 0;
    const result = subarraySum(nums, k);
    expect(result).toBe(6); // All possible subarrays sum to 0
  });

  test('should handle empty array', () => {
    const nums = [];
    const k = 5;
    const result = subarraySum(nums, k);
    expect(result).toBe(0);
  });

  test('should handle case with larger k than possible sums', () => {
    const nums = [1, 2, 3];
    const k = 10;
    const result = subarraySum(nums, k);
    expect(result).toBe(0);
  });
});
