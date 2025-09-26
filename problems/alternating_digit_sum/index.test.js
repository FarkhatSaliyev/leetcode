const altSum = require('./index');

describe('altSum', () => {
  test('should return correct alternating sum for positive numbers', () => {
    // Example 1: n = 521
    expect(altSum(521)).toBe(4); // (+5) + (-2) + (+1) = 4
    
    // Example 2: n = 111
    expect(altSum(111)).toBe(1); // (+1) + (-1) + (+1) = 1
    
    // Example 3: n = 886996
    expect(altSum(886996)).toBe(0); // (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0
  });

  test('should handle single digit numbers', () => {
    expect(altSum(0)).toBe(0);
    expect(altSum(1)).toBe(1);
    expect(altSum(9)).toBe(9);
  });

  test('should handle two digit numbers', () => {
    expect(altSum(12)).toBe(-1); // (+1) + (-2) = 1 - 2 = -1
    expect(altSum(23)).toBe(-1); // (+2) + (-3) = 2 - 3 = -1
    expect(altSum(34)).toBe(-1); // (+3) + (-4) = 3 - 4 = -1
    expect(altSum(45)).toBe(-1); // (+4) + (-5) = 4 - 5 = -1
  });

  test('should handle three digit numbers', () => {
    expect(altSum(123)).toBe(2); // (+1) + (-2) + (+3) = 1 - 2 + 3 = 2
    expect(altSum(456)).toBe(5); // (+4) + (-5) + (+6) = 4 - 5 + 6 = 5
    expect(altSum(789)).toBe(8); // (+7) + (-8) + (+9) = 7 - 8 + 9 = 8
  });

  test('should handle larger numbers', () => {
    expect(altSum(1234)).toBe(-2); // (+1) + (-2) + (+3) + (-4) = 1 - 2 + 3 - 4 = -2
    expect(altSum(5678)).toBe(-2); // (+5) + (-6) + (+7) + (-8) = 5 - 6 + 7 - 8 = -2
    expect(altSum(9999)).toBe(0);  // (+9) + (-9) + (+9) + (-9) = 0
  });

  test('should handle numbers with zeros', () => {
    expect(altSum(101)).toBe(2); // (+1) + (-0) + (+1) = 1 - 0 + 1 = 2
    expect(altSum(1001)).toBe(0); // (+1) + (-0) + (+0) + (-1) = 1 - 0 + 0 - 1 = 0
    expect(altSum(2020)).toBe(4); // (+2) + (-0) + (+2) + (-0) = 2 - 0 + 2 - 0 = 4
  });

  test('should handle edge cases', () => {
    expect(altSum(1)).toBe(1);
    expect(altSum(10)).toBe(1); // (+1) + (-0) = 1
    expect(altSum(100)).toBe(1); // (+1) + (-0) + (+0) = 1
    expect(altSum(1000)).toBe(1); // (+1) + (-0) + (+0) + (-0) = 1
  });

  test('should handle palindromic numbers', () => {
    expect(altSum(121)).toBe(0); // (+1) + (-2) + (+1) = 1 - 2 + 1 = 0
    expect(altSum(1331)).toBe(0); // (+1) + (-3) + (+3) + (-1) = 1 - 3 + 3 - 1 = 0
    expect(altSum(1221)).toBe(0); // (+1) + (-2) + (+2) + (-1) = 1 - 2 + 2 - 1 = 0
  });
});
