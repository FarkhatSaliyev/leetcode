const firstMissingPositive = require('./index');

describe('firstMissingPositive', () => {
  test('empty array → 1', () => {
    expect(firstMissingPositive([])).toBe(1);
  });

  test('all negatives/zeros → 1', () => {
    expect(firstMissingPositive([-1, -2, 0])).toBe(1);
  });

  test('no 1 present → 1', () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });

  test('simple consecutive → next after max', () => {
    expect(firstMissingPositive([1, 2, 3])).toBe(4);
  });

  test('gap in middle', () => {
    expect(firstMissingPositive([1, 3, 4])).toBe(2);
  });

  test('unsorted with negatives/zeros', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  });

  test('contains zero and positives', () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
  });

  test('duplicates should be ignored', () => {
    expect(firstMissingPositive([1, 1, 2, 2])).toBe(3);
    expect(firstMissingPositive([2, 2, 2])).toBe(1);
  });

  test('single element cases', () => {
    expect(firstMissingPositive([1])).toBe(2);
    expect(firstMissingPositive([2])).toBe(1);
  });

  test('mixed large set', () => {
    expect(firstMissingPositive([2, 5, 3, 1, 7, 6, 4])).toBe(8);
  });
});
