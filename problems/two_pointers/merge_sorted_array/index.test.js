const merge = require('./index')

describe('merge', () => {
    test('merges two sorted arrays of equal size', () => {
      const nums1 = [1, 2, 3, 0, 0, 0];
      merge(nums1, 3, [2, 5, 6], 3);
      expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
  
    test('handles legitimate zeros in nums1', () => {
      const nums1 = [0, 1, 0, 0, 0];
      merge(nums1, 2, [2, 3, 4], 3);
      expect(nums1).toEqual([0, 1, 2, 3, 4]); // ✅ Now works!
    });
  
    test('handles empty nums2', () => {
      const nums1 = [1, 2, 3];
      merge(nums1, 3, [], 0);
      expect(nums1).toEqual([1, 2, 3]);
    });
  
    test('handles empty nums1 (m=0)', () => {
      const nums1 = [0, 0, 0];
      merge(nums1, 0, [1, 2, 3], 3);
      expect(nums1).toEqual([1, 2, 3]);
    });
  
    test('nums2 all smaller than nums1', () => {
      const nums1 = [4, 5, 6, 0, 0, 0];
      merge(nums1, 3, [1, 2, 3], 3);
      expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });
  
    test('nums2 all larger than nums1', () => {
      const nums1 = [1, 2, 3, 0, 0, 0];
      merge(nums1, 3, [4, 5, 6], 3);
      expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });
  
    test('handles negative numbers', () => {
      const nums1 = [-3, -1, 0, 0, 0];
      merge(nums1, 2, [-2, 1, 5], 3);
      expect(nums1).toEqual([-3, -2, -1, 1, 5]);
    });
  
    test('handles duplicates', () => {
      const nums1 = [1, 2, 2, 0, 0, 0];
      merge(nums1, 3, [2, 2, 3], 3);
      expect(nums1).toEqual([1, 2, 2, 2, 2, 3]);
    });
  
    test('single element merge', () => {
      const nums1 = [1, 0];
      merge(nums1, 1, [2], 1);
      expect(nums1).toEqual([1, 2]);
    });
  
    test('interleaved values', () => {
      const nums1 = [1, 3, 5, 0, 0, 0];
      merge(nums1, 3, [2, 4, 6], 3);
      expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });