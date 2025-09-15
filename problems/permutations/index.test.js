const permute = require('./index');

describe('permute', () => {
  test('should return all permutations of [1,2,3]', () => {
    const result = permute([1, 2, 3]);

    // There should be 6 permutations
    expect(result.length).toBe(6);

    // Check that all expected permutations are included
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];

    expected.forEach(p => {
      expect(result).toContainEqual(p);
    });
  });

  test('should return single permutation for [1]', () => {
    const result = permute([1]);
    expect(result).toEqual([[1]]);
  });

  test('should handle two elements [0,1]', () => {
    const result = permute([0, 1]);
    const expected = [
      [0, 1],
      [1, 0]
    ];
    expect(result.length).toBe(2);
    expected.forEach(p => {
      expect(result).toContainEqual(p);
    });
  });

  test('should return empty list for []', () => {
    const result = permute([]);
    expect(result).toEqual([[]]); // only the empty permutation
  });
});
