const findClosestElements = require('./index');

describe('findClosestElements', () => {
  test('basic case', () => {
    expect(findClosestElements([2, 4, 5, 8], 2, 6)).toEqual([4, 5]);
  });

  test('LeetCode example 1', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
  });

  test('LeetCode example 2', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
  });

  test('x smaller than all elements', () => {
    expect(findClosestElements([10, 20, 30, 40], 2, -100)).toEqual([10, 20]);
  });

  test('x larger than all elements', () => {
    expect(findClosestElements([10, 20, 30, 40], 2, 100)).toEqual([30, 40]);
  });

  test('k equals array length', () => {
    expect(findClosestElements([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
  });

  test('tie should prefer smaller values', () => {
    // x=3 is equally distant from 2 and 4, prefer 2
    expect(findClosestElements([1, 2, 4, 5], 1, 3)).toEqual([2]);
  });

  test('handles duplicates', () => {
    expect(findClosestElements([1, 2, 2, 2, 3, 4], 3, 2)).toEqual([2, 2, 2]);
  });

  test('single element array', () => {
    expect(findClosestElements([7], 1, 100)).toEqual([7]);
  });
});
