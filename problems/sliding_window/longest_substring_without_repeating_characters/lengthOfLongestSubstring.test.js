const lengthOfLongestSubstring = require('./longest_substring_without_repeating_characters');

test('Example 1: abcabcbb', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3); // "abc"
});

test('Example 2: bbbbb', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1); // "b"
});

test('Example 3: pwwkew', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3); // "wke"
});

test('Empty string', () => {
  expect(lengthOfLongestSubstring('')).toBe(0);
});

test('au', () => {
  expect(lengthOfLongestSubstring('au')).toBe(2); // "au"
});

test('dvdf', () => {
  expect(lengthOfLongestSubstring('dvdf')).toBe(3); // "vdf"
});

test('abba', () => {
  expect(lengthOfLongestSubstring('abba')).toBe(2); // "ab" or "ba"
});

test('tmmzuxt', () => {
  expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5); // "mzuxt"
}); 