const rotate = require('./index');

describe('rotate', () => {
  test('should rotate array by k steps (basic case)', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = rotate(nums, 4);
    expect(result).toEqual([5, 6, 7, 8, 1, 2, 3, 4]);
  });

  test('should rotate by 1 correctly', () => {
    const nums = [1, 2, 3];
    const result = rotate(nums, 1);
    expect(result).toEqual([3, 1, 2]);
  });

  test('should handle k larger than array length', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = rotate(nums, 12); // 12 % 5 = 2
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  test('should handle k equal to array length (no rotation)', () => {
    const nums = [10, 20, 30];
    const result = rotate(nums, 3); // 3 % 3 = 0
    expect(result).toEqual([10, 20, 30]);
  });

  test('should handle k = 0 (no rotation)', () => {
    const nums = [1, 2, 3];
    const result = rotate(nums, 0);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should handle single element array', () => {
    const nums = [99];
    const result = rotate(nums, 10);
    expect(result).toEqual([99]);
  });

  test('should handle empty array', () => {
    const nums = [];
    const result = rotate(nums, 3);
    expect(result).toEqual([]);
  });

  test('should not create a new array reference (in-place modification)', () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const ref = nums;
    const result = rotate(nums, 2);
    expect(nums).toBe(ref); // same reference
    expect(result).toBe(ref);
    expect(nums).toEqual([5, 6, 1, 2, 3, 4]);
  });
});
