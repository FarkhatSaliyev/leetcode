const scoreOfString = require('./index');

describe('scoreOfString', () => {
  test('should return correct score for basic examples', () => {
    expect(scoreOfString('code')).toBe(24); // |c-o| + |o-d| + |d-e| = |99-111| + |111-100| + |100-101| = 12 + 11 + 1 = 24
    expect(scoreOfString('hello')).toBe(13); // |h-e| + |e-l| + |l-l| + |l-o| = |104-101| + |101-108| + |108-108| + |108-111| = 3 + 7 + 0 + 3 = 13
  });

  test('should handle single character strings', () => {
    expect(scoreOfString('a')).toBe(0); // No adjacent characters
    expect(scoreOfString('z')).toBe(0); // No adjacent characters
    expect(scoreOfString('5')).toBe(0); // No adjacent characters
  });

  test('should handle two character strings', () => {
    expect(scoreOfString('ab')).toBe(1); // |a-b| = |97-98| = 1
    expect(scoreOfString('az')).toBe(25); // |a-z| = |97-122| = 25
    expect(scoreOfString('za')).toBe(25); // |z-a| = |122-97| = 25
    expect(scoreOfString('AA')).toBe(0); // |A-A| = |65-65| = 0
  });

  test('should handle three character strings', () => {
    expect(scoreOfString('abc')).toBe(2); // |a-b| + |b-c| = |97-98| + |98-99| = 1 + 1 = 2
    expect(scoreOfString('cba')).toBe(2); // |c-b| + |b-a| = |99-98| + |98-97| = 1 + 1 = 2
    expect(scoreOfString('aaa')).toBe(0); // |a-a| + |a-a| = |97-97| + |97-97| = 0 + 0 = 0
  });

  test('should handle strings with repeated characters', () => {
    expect(scoreOfString('aabb')).toBe(1); // |a-a| + |a-b| + |b-b| = |97-97| + |97-98| + |98-98| = 0 + 1 + 0 = 1
    expect(scoreOfString('abba')).toBe(2); // |a-b| + |b-b| + |b-a| = |97-98| + |98-98| + |98-97| = 1 + 0 + 1 = 2
  });

  test('should handle mixed case strings', () => {
    expect(scoreOfString('Aa')).toBe(32); // |A-a| = |65-97| = 32
    expect(scoreOfString('aA')).toBe(32); // |a-A| = |97-65| = 32
    expect(scoreOfString('AbC')).toBe(64); // |A-b| + |b-C| = |65-98| + |98-67| = 33 + 31 = 64
  });

  test('should handle numeric strings', () => {
    expect(scoreOfString('123')).toBe(2); // |1-2| + |2-3| = |49-50| + |50-51| = 1 + 1 = 2
    expect(scoreOfString('321')).toBe(2); // |3-2| + |2-1| = |51-50| + |50-49| = 1 + 1 = 2
    expect(scoreOfString('135')).toBe(4); // |1-3| + |3-5| = |49-51| + |51-53| = 2 + 2 = 4
  });

  test('should handle special characters', () => {
    expect(scoreOfString('!@#')).toBe(60); // |!-@| + |@-#| = |33-64| + |64-35| = 31 + 29 = 60
    expect(scoreOfString('  ')).toBe(0); // |space-space| = |32-32| = 0
  });

  test('should handle empty string', () => {
    expect(scoreOfString('')).toBe(0); // No characters
  });

  test('should handle longer strings', () => {
    expect(scoreOfString('abcdef')).toBe(5); // |a-b| + |b-c| + |c-d| + |d-e| + |e-f| = 1+1+1+1+1 = 5
    expect(scoreOfString('fedcba')).toBe(5); // |f-e| + |e-d| + |d-c| + |c-b| + |b-a| = 1+1+1+1+1 = 5
    expect(scoreOfString('abcdefghijklmnopqrstuvwxyz')).toBe(25); // All consecutive letters
  });
});
