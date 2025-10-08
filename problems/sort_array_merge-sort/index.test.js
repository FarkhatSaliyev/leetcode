const sortArray = require('./index')

describe('sortArray', () => {
    test('sorts a simple unsorted array', () => {
      expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
    });
  
    test('sorts an array with duplicates', () => {
      expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
    });
  
    test('returns empty array for empty input', () => {
      expect(sortArray([])).toEqual([]);
    });
  
    test('returns single element array unchanged', () => {
      expect(sortArray([5])).toEqual([5]);
    });
  
    test('sorts two element array', () => {
      expect(sortArray([2, 1])).toEqual([1, 2]);
    });
  
    test('returns already sorted array', () => {
      expect(sortArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  
    test('sorts reverse sorted array', () => {
      expect(sortArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
  
    test('sorts array with negative numbers', () => {
      expect(sortArray([-5, -1, -3, -2, -4])).toEqual([-5, -4, -3, -2, -1]);
    });
  
    test('sorts array with mixed positive and negative numbers', () => {
      expect(sortArray([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });
  
    test('sorts array with zeros', () => {
      expect(sortArray([0, 5, 0, -2, 3])).toEqual([-2, 0, 0, 3, 5]);
    });
  
    test('sorts array with all same values', () => {
      expect(sortArray([3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
    });
  
    test('sorts large array', () => {
      const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      expect(sortArray(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  
    test('sorts array with random order', () => {
      expect(sortArray([8, 3, 5, 1, 9, 2])).toEqual([1, 2, 3, 5, 8, 9]);
    });
  
    test('handles very large numbers', () => {
      expect(sortArray([1000000, 1, 500000, 250000])).toEqual([1, 250000, 500000, 1000000]);
    });
  
    test('sorts array with decimal numbers', () => {
      expect(sortArray([3.5, 1.2, 2.8, 1.2])).toEqual([1.2, 1.2, 2.8, 3.5]);
    });
  
    test('sorts odd length array', () => {
      expect(sortArray([5, 3, 7, 1, 9])).toEqual([1, 3, 5, 7, 9]);
    });
  
    test('sorts even length array', () => {
      expect(sortArray([6, 2, 8, 4])).toEqual([2, 4, 6, 8]);
    });
  
    test('does not mutate original array', () => {
      const original = [5, 2, 3, 1];
      const copy = [...original];
      sortArray(original);
      expect(original).toEqual(copy); // Original unchanged
    });
  
    test('sorts array with only negative numbers', () => {
      expect(sortArray([-3, -7, -1, -9, -2])).toEqual([-9, -7, -3, -2, -1]);
    });
  
    test('sorts array with extreme values', () => {
      expect(sortArray([Number.MAX_SAFE_INTEGER, 0, Number.MIN_SAFE_INTEGER, 100]))
        .toEqual([Number.MIN_SAFE_INTEGER, 0, 100, Number.MAX_SAFE_INTEGER]);
    });
  
    test('handles array with many duplicates', () => {
      expect(sortArray([2, 1, 2, 1, 2, 1])).toEqual([1, 1, 1, 2, 2, 2]);
    });
  
    test('sorts three element array', () => {
      expect(sortArray([3, 1, 2])).toEqual([1, 2, 3]);
    });
  
    test('example case 1', () => {
      expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
    });
  
    test('example case 2', () => {
      expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
    });
  });