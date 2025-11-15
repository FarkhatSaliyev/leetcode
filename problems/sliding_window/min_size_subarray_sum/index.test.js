const minSubArrayLen = require('./index');

describe('minSubArrayLen', () => {
  test('basic example with clear minimum window', () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    // Minimal subarray is [4,3] length = 2
    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  test('no subarray can reach target → 0', () => {
    const target = 16;
    const nums = [1, 2, 3, 4, 5];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  test('single element equals target', () => {
    const target = 5;
    const nums = [5];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  test('single element less than target', () => {
    const target = 5;
    const nums = [3];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  test('entire array needed to reach target', () => {
    const target = 11;
    const nums = [1, 2, 3, 5];
    // 1+2+3+5 = 11 → whole array, length = 4
    expect(minSubArrayLen(target, nums)).toBe(4);
  });

  test('multiple possible windows, choose smallest', () => {
    const target = 8;
    const nums = [3, 1, 4, 3, 2, 1];
    // [3,1,4] = 8 (len 3), [4,3,2] = 9 (len 3), [3,2,1,?]… minimal is 3
    expect(minSubArrayLen(target, nums)).toBe(3);
  });

  test('target achieved by last elements only', () => {
    const target = 6;
    const nums = [1, 1, 1, 3, 3];
    // [3,3] = 6 → length 2
    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  test('empty array → 0', () => {
    const target = 5;
    const nums = [];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  test('array with many small numbers, only long subarray works', () => {
    const target = 10;
    const nums = [1, 1, 1, 1, 1, 5];
    // Need [1,1,1,1,1,5] = 10 → length 6
    expect(minSubArrayLen(target, nums)).toBe(6);
  });

  test('first element already >= target', () => {
    const target = 4;
    const nums = [5, 1, 1, 1];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });
});
