const longestCommonPrefix = require('./index');

describe('longestCommonPrefix', () => {
  test('should return correct prefix for basic examples', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    expect(longestCommonPrefix(['bat', 'bag', 'bank', 'band'])).toBe('ba');
  });

  test('should handle single string', () => {
    expect(longestCommonPrefix(['hello'])).toBe('hello');
    expect(longestCommonPrefix(['a'])).toBe('a');
    expect(longestCommonPrefix([''])).toBe('');
  });

  test('should handle empty array', () => {
    expect(longestCommonPrefix([])).toBe('');
  });

  test('should handle identical strings', () => {
    expect(longestCommonPrefix(['hello', 'hello', 'hello'])).toBe('hello');
    expect(longestCommonPrefix(['a', 'a', 'a'])).toBe('a');
    expect(longestCommonPrefix(['', '', ''])).toBe('');
  });

  test('should handle strings with no common prefix', () => {
    expect(longestCommonPrefix(['abc', 'def', 'ghi'])).toBe('');
    expect(longestCommonPrefix(['a', 'b', 'c'])).toBe('');
    expect(longestCommonPrefix(['hello', 'world', 'test'])).toBe('');
  });

  test('should handle strings with single character common prefix', () => {
    expect(longestCommonPrefix(['apple', 'ant', 'apartment'])).toBe('a');
    expect(longestCommonPrefix(['cat', 'car', 'can'])).toBe('ca');
    expect(longestCommonPrefix(['test', 'try', 'time'])).toBe('t');
  });

  test('should handle strings with multiple character common prefix', () => {
    expect(longestCommonPrefix(['programming', 'program', 'progress'])).toBe('progr');
    expect(longestCommonPrefix(['testing', 'test', 'tester'])).toBe('test');
    expect(longestCommonPrefix(['leetcode', 'leet', 'leets'])).toBe('leet');
  });

  test('should handle strings of different lengths', () => {
    expect(longestCommonPrefix(['a', 'ab', 'abc'])).toBe('a');
    expect(longestCommonPrefix(['abc', 'ab', 'a'])).toBe('a');
    expect(longestCommonPrefix(['longest', 'long', 'lon'])).toBe('lon');
  });

  test('should handle strings with empty strings in array', () => {
    expect(longestCommonPrefix(['hello', '', 'world'])).toBe('');
    expect(longestCommonPrefix(['', 'hello', 'world'])).toBe('');
    expect(longestCommonPrefix(['hello', 'world', ''])).toBe('');
  });

  test('should handle case sensitivity', () => {
    expect(longestCommonPrefix(['Hello', 'hello', 'HELLO'])).toBe('');
    expect(longestCommonPrefix(['Test', 'Test', 'Test'])).toBe('Test');
    expect(longestCommonPrefix(['abc', 'ABC', 'Abc'])).toBe('');
  });

  test('should handle special characters', () => {
    expect(longestCommonPrefix(['!@#', '!@$', '!@%'])).toBe('!@');
    expect(longestCommonPrefix(['123', '1234', '12345'])).toBe('123');
    expect(longestCommonPrefix(['test-', 'test_', 'test.'])).toBe('test');
  });

  test('should handle very short strings', () => {
    expect(longestCommonPrefix(['a', 'a', 'a'])).toBe('a');
    expect(longestCommonPrefix(['a', 'b', 'c'])).toBe('');
    expect(longestCommonPrefix(['ab', 'ac', 'ad'])).toBe('a');
  });

  test('should handle very long strings', () => {
    const longPrefix = 'verylongcommonprefix';
    expect(longestCommonPrefix([
      longPrefix + '1',
      longPrefix + '2', 
      longPrefix + '3'
    ])).toBe(longPrefix);
  });

  test('should handle mixed length strings with common prefix', () => {
    expect(longestCommonPrefix(['programming', 'program', 'pro'])).toBe('pro');
    expect(longestCommonPrefix(['test', 'testing', 'tester', 'tested'])).toBe('test');
    expect(longestCommonPrefix(['a', 'ab', 'abc', 'abcd'])).toBe('a');
  });

  test('should handle edge cases with two strings', () => {
    expect(longestCommonPrefix(['hello', 'world'])).toBe('');
    expect(longestCommonPrefix(['hello', 'hello'])).toBe('hello');
    expect(longestCommonPrefix(['a', 'ab'])).toBe('a');
    expect(longestCommonPrefix(['ab', 'a'])).toBe('a');
  });

  test('should handle strings with numbers and letters', () => {
    expect(longestCommonPrefix(['test1', 'test2', 'test3'])).toBe('test');
    expect(longestCommonPrefix(['1test', '2test', '3test'])).toBe('');
    expect(longestCommonPrefix(['a1', 'a2', 'a3'])).toBe('a');
  });
});
