const isSubsequence = require('./index');

describe('isSubsequence', () => {
  test('should return true for valid subsequences', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true); // 'a', 'b', 'c' appear in order in 'ahbgdc'
    expect(isSubsequence('ace', 'abcde')).toBe(true); // 'a', 'c', 'e' appear in order in 'abcde'
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false); // 'a', 'x', 'c' - 'x' not found after 'a'
  });

  test('should handle empty subsequence', () => {
    expect(isSubsequence('', 'abc')).toBe(true); // Empty string is always a subsequence
    expect(isSubsequence('', '')).toBe(true); // Empty string is subsequence of empty string
  });

  test('should handle empty target string', () => {
    expect(isSubsequence('a', '')).toBe(false); // Non-empty string cannot be subsequence of empty string
    expect(isSubsequence('abc', '')).toBe(false); // Non-empty string cannot be subsequence of empty string
  });

  test('should handle single character subsequences', () => {
    expect(isSubsequence('a', 'abc')).toBe(true); // 'a' found in 'abc'
    expect(isSubsequence('b', 'abc')).toBe(true); // 'b' found in 'abc'
    expect(isSubsequence('c', 'abc')).toBe(true); // 'c' found in 'abc'
    expect(isSubsequence('d', 'abc')).toBe(false); // 'd' not found in 'abc'
  });

  test('should handle identical strings', () => {
    expect(isSubsequence('abc', 'abc')).toBe(true); // String is subsequence of itself
    expect(isSubsequence('hello', 'hello')).toBe(true); // String is subsequence of itself
  });

  test('should handle subsequence at the beginning', () => {
    expect(isSubsequence('ab', 'abcdef')).toBe(true); // 'ab' at start of 'abcdef'
    expect(isSubsequence('hello', 'helloworld')).toBe(true); // 'hello' at start of 'helloworld'
  });

  test('should handle subsequence at the end', () => {
    expect(isSubsequence('ef', 'abcdef')).toBe(true); // 'ef' at end of 'abcdef'
    expect(isSubsequence('world', 'helloworld')).toBe(true); // 'world' at end of 'helloworld'
  });

  test('should handle subsequence in the middle', () => {
    expect(isSubsequence('cd', 'abcdef')).toBe(true); // 'cd' in middle of 'abcdef'
    expect(isSubsequence('lo', 'helloworld')).toBe(true); // 'lo' in middle of 'helloworld'
  });

  test('should handle non-consecutive characters', () => {
    expect(isSubsequence('ace', 'abcde')).toBe(true); // 'a', 'c', 'e' not consecutive but in order
    expect(isSubsequence('adf', 'abcdef')).toBe(true); // 'a', 'd', 'f' not consecutive but in order
    expect(isSubsequence('afc', 'abcdef')).toBe(false); // 'a', 'f', 'c' - 'c' comes before 'f'
  });

  test('should handle repeated characters', () => {
    expect(isSubsequence('aab', 'aaabbb')).toBe(true); // 'a', 'a', 'b' in 'aaabbb'
    expect(isSubsequence('abb', 'aaabbb')).toBe(true); // 'a', 'b', 'b' in 'aaabbb'
    expect(isSubsequence('aaa', 'aaabbb')).toBe(true); // 'a', 'a', 'a' in 'aaabbb'
    expect(isSubsequence('bbb', 'aaabbb')).toBe(true); // 'b', 'b', 'b' in 'aaabbb'
  });

  test('should handle case sensitivity', () => {
    expect(isSubsequence('AbC', 'AbCdEf')).toBe(true); // Case sensitive matching
    expect(isSubsequence('abc', 'AbCdEf')).toBe(false); // Different case
    expect(isSubsequence('ABC', 'AbCdEf')).toBe(false); // Different case
  });

  test('should handle special characters', () => {
    expect(isSubsequence('!@#', 'hello!@#world')).toBe(true); // Special chars in order
    expect(isSubsequence('!@#', 'hello@!#world')).toBe(false); // Special chars out of order
    expect(isSubsequence('123', 'abc123def')).toBe(true); // Numbers in order
  });

  test('should handle longer sequences', () => {
    expect(isSubsequence('programming', 'programming')).toBe(true); // Long identical strings
    expect(isSubsequence('prog', 'programming')).toBe(true); // Long subsequence
    expect(isSubsequence('prog', 'prog')).toBe(true); // Equal length
    expect(isSubsequence('programming', 'prog')).toBe(false); // Subsequence longer than target
  });

  test('should handle edge cases with single characters', () => {
    expect(isSubsequence('a', 'a')).toBe(true); // Single char identical
    expect(isSubsequence('a', 'b')).toBe(false); // Single char different
    expect(isSubsequence('a', 'ab')).toBe(true); // Single char in longer string
  });

  test('should handle complex subsequence patterns', () => {
    expect(isSubsequence('leetcode', 'leetcoded')).toBe(true); // Almost identical
    expect(isSubsequence('leet', 'leetcode')).toBe(true); // First part
    expect(isSubsequence('code', 'leetcode')).toBe(true); // Last part
    expect(isSubsequence('ltd', 'leetcode')).toBe(true); // Scattered chars
    expect(isSubsequence('ltc', 'leetcode')).toBe(true); // 'l', 't', 'c' in order in 'leetcode'
    expect(isSubsequence('cte', 'leetcode')).toBe(false); // 'c' before 't' in subsequence but 't' before 'c' in target
  });
});
