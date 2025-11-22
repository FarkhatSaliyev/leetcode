const containsNearbyDuplicate = require('./index');

describe('containsNearbyDuplicate', () => {
  test('returns true when duplicates are within distance k', () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    expect(containsNearbyDuplicate(nums, k)).toBe(true);
  });

  test('returns false when duplicates exist but are too far away', () => {
    const nums = [1, 0, 1, 1];
    const k = 1;
    expect(containsNearbyDuplicate(nums, k)).toBe(true); // 1 appears at 2 and 3 (distance 1)
  });

  test('returns false when duplicates exist but distance > k', () => {
    const nums = [1, 2, 3, 1];
    const k = 2;
    expect(containsNearbyDuplicate(nums, k)).toBe(false);
  });

  test('returns true for multiple duplicates if one pair is valid', () => {
    const nums = [1, 2, 1, 3, 2];
    const k = 2;
    expect(containsNearbyDuplicate(nums, k)).toBe(true); // 1's at distance 2
  });

  test('returns false when no duplicates exist', () => {
    const nums = [1, 2, 3, 4];
    const k = 3;
    expect(containsNearbyDuplicate(nums, k)).toBe(false);
  });

  test('handles k = 0 (no window → always false)', () => {
    const nums = [1, 1];
    const k = 0;
    expect(containsNearbyDuplicate(nums, k)).toBe(false);
  });

  test('handles empty array', () => {
    const nums = [];
    const k = 3;
    expect(containsNearbyDuplicate(nums, k)).toBe(false);
  });

  test('handles negative numbers in array', () => {
    const nums = [-1, -2, -3, -1];
    const k = 3;
    expect(containsNearbyDuplicate(nums, k)).toBe(true);
  });

  test('handles large k (should detect duplicates anywhere)', () => {
    const nums = [99, 100, 101, 99];
    const k = 1000;
    expect(containsNearbyDuplicate(nums, k)).toBe(true);
  });

  test('returns false when duplicates are just outside the k range', () => {
    const nums = [7, 1, 3, 7];
    const k = 2; // distance = 3 → false
    expect(containsNearbyDuplicate(nums, k)).toBe(false);
  });
});
