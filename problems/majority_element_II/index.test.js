const majorityElement = require('./index');

describe('majorityElement', () => {
  test('should return single majority element', () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    expect(result).toEqual([3]);
  });

  test('should return multiple majority elements', () => {
    const nums = [5, 2, 3, 2, 2, 2, 2, 5, 5, 5];
    const result = majorityElement(nums);
    expect(result).toEqual([2, 5]); // preserves order of appearance
  });

  test('should handle all same elements', () => {
    const nums = [1, 1, 1, 1];
    const result = majorityElement(nums);
    expect(result).toEqual([1]);
  });

  test('should handle no majority elements', () => {
    const nums = [1, 2, 3, 4];
    const result = majorityElement(nums);
    expect(result).toEqual([]);
  });

  test('should handle empty array', () => {
    const nums = [];
    const result = majorityElement(nums);
    expect(result).toEqual([]);
  });

  test('should return result in correct input order', () => {
    const nums = [2, 2, 5, 5, 5, 2, 2];
    const result = majorityElement(nums);
    expect(result).toEqual([2, 5]);
  });
});
