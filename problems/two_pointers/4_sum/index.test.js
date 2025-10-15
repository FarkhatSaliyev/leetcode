const fourSum = require('./index');

describe('fourSum', () => {
  test('should find all unique quadruplets that sum to target (example case)', () => {
    const nums = [3, 2, 3, -3, 1, 0];
    const target = 3;
    const result = fourSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([
      [-3, 0, 3, 3],
      [-3, 1, 2, 3]
    ]));
    expect(result.length).toBe(2);
  });

  test('should handle no valid quadruplets', () => {
    const nums = [1, 2, 3, 4];
    const target = 100;
    const result = fourSum(nums, target);
    expect(result).toEqual([]);
  });

  test('should handle all negative numbers', () => {
    const nums = [-5, -4, -3, -2, -1];
    const target = -10;
    const result = fourSum(nums, target);
    expect(result).toEqual([
      [-4, -3, -2, -1]
    ]);
  });

  test('should handle repeated numbers correctly', () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const target = 0;
    const result = fourSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ]));
  });

  test('should handle empty array', () => {
    const nums = [];
    const target = 0;
    const result = fourSum(nums, target);
    expect(result).toEqual([]);
  });

  test('should handle small array (less than 4 elements)', () => {
    const nums = [1, 2, 3];
    const target = 6;
    const result = fourSum(nums, target);
    expect(result).toEqual([]);
  });

  test('should handle duplicates without repeating quadruplets', () => {
    const nums = [2, 2, 2, 2, 2];
    const target = 8;
    const result = fourSum(nums, target);
    expect(result).toEqual([[2, 2, 2, 2]]);
  });
});
