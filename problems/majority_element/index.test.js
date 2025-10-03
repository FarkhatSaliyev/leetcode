const majorityElement = require('./index');

describe('majorityElement', () => {
  test('should return correct majority element for basic examples', () => {
    expect(majorityElement([3, 2, 3])).toBe('3');
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe('2');
    expect(majorityElement([5, 5, 1, 1, 1, 5, 5])).toBe('5');
  });

  test('should handle single element array', () => {
    expect(majorityElement([1])).toBe('1');
    expect(majorityElement([42])).toBe('42');
  });

  test('should handle two element array', () => {
    expect(majorityElement([1, 1])).toBe('1');
    expect(majorityElement([1, 2])).toBe('1'); // First element wins in case of tie
  });

  test('should handle three element array', () => {
    expect(majorityElement([1, 1, 2])).toBe('1');
    expect(majorityElement([1, 2, 2])).toBe('2');
    expect(majorityElement([1, 1, 1])).toBe('1');
  });

  test('should handle array with all same elements', () => {
    expect(majorityElement([1, 1, 1, 1])).toBe('1');
    expect(majorityElement([5, 5, 5, 5, 5])).toBe('5');
  });

  test('should handle array with clear majority', () => {
    expect(majorityElement([1, 1, 1, 2, 3])).toBe('1');
    expect(majorityElement([2, 2, 2, 2, 3, 4, 5])).toBe('2');
  });

  test('should handle array with majority at beginning', () => {
    expect(majorityElement([1, 1, 1, 2, 3, 4])).toBe('1');
    expect(majorityElement([5, 5, 5, 1, 2, 3])).toBe('5');
  });

  test('should handle array with majority at end', () => {
    expect(majorityElement([1, 2, 3, 4, 4, 4])).toBe('4');
    expect(majorityElement([1, 2, 3, 5, 5, 5])).toBe('5');
  });

  test('should handle array with majority in middle', () => {
    expect(majorityElement([1, 2, 3, 3, 3, 4, 5])).toBe('3');
    expect(majorityElement([1, 2, 4, 4, 4, 5, 6])).toBe('4');
  });

  test('should handle negative numbers', () => {
    expect(majorityElement([-1, -1, -1, 2, 3])).toBe('-1');
    expect(majorityElement([1, 2, -3, -3, -3])).toBe('-3');
  });

  test('should handle zero', () => {
    expect(majorityElement([0, 0, 0, 1, 2])).toBe('0');
    expect(majorityElement([1, 2, 0, 0, 0])).toBe('0');
  });

  test('should handle large numbers', () => {
    expect(majorityElement([1000, 1000, 1000, 2000, 3000])).toBe('1000');
    expect(majorityElement([1, 2, 999999, 999999, 999999])).toBe('999999');
  });

  test('should handle array with alternating pattern', () => {
    expect(majorityElement([1, 2, 1, 2, 1])).toBe('1');
    expect(majorityElement([1, 2, 1, 2, 1, 2, 1])).toBe('1');
  });

  test('should handle array with tie (returns first encountered)', () => {
    expect(majorityElement([1, 2, 1, 2])).toBe('1'); // First element with max count
    expect(majorityElement([2, 1, 2, 1])).toBe('1'); // First element encountered in object iteration
  });

  test('should handle array with multiple elements having same max count', () => {
    expect(majorityElement([1, 1, 2, 2, 3, 3])).toBe('1'); // First encountered
    expect(majorityElement([3, 3, 1, 1, 2, 2])).toBe('1'); // First encountered in object iteration
  });

  test('should handle array with majority element appearing more than half', () => {
    expect(majorityElement([1, 1, 1, 1, 2, 3, 4])).toBe('1');
    expect(majorityElement([2, 2, 2, 2, 2, 1, 3, 4, 5])).toBe('2');
  });

  test('should handle array with majority element appearing exactly half', () => {
    expect(majorityElement([1, 1, 2, 2])).toBe('1'); // First element wins
    expect(majorityElement([1, 2, 1, 2])).toBe('1'); // First element wins
  });

  test('should handle array with majority element appearing less than half', () => {
    expect(majorityElement([1, 1, 2, 3, 4, 5])).toBe('1'); // Still returns most frequent
    expect(majorityElement([1, 2, 2, 3, 4, 5, 6])).toBe('2'); // Still returns most frequent
  });
});
