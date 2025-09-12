const subsets = require('./index'); // adjust path if needed

describe('subsets', () => {
  test('should return all subsets for [1,2,3]', () => {
    const nums = [1, 2, 3];
    const result = subsets(nums);

    // Expected 8 subsets for length 3
    expect(result.length).toBe(8);

    // Check that some important subsets are included
    expect(result).toEqual(
      expect.arrayContaining([
        [], [1], [2], [3],
        [1, 2], [1, 3], [2, 3],
        [1, 2, 3]
      ])
    );
  });

  test('should return [[]] for empty input', () => {
    expect(subsets([])).toEqual([[]]);
  });

  test('should handle single element [1]', () => {
    expect(subsets([1])).toEqual([[], [1]]);
  });

  test('should handle two elements [1,2]', () => {
    const result = subsets([1,2]);
    expect(result.length).toBe(4);
    expect(result).toEqual(
      expect.arrayContaining([[], [1], [2], [1,2]])
    );
  });
});
