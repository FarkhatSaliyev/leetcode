const characterReplacement = require('./longest_repeating_character_replacement');

test('Example 1: "ABAB" with k=1', () => {
  expect(characterReplacement("ABAB", 1)).toBe(3);
});

test('Example 2: "AABABBA" with k=1', () => {
  expect(characterReplacement("AABABBA", 1)).toBe(4);
});

test('Example 3: "AAABABB" with k=1', () => {
  expect(characterReplacement("AAABABB", 1)).toBe(5);
});

test('All same characters', () => {
  expect(characterReplacement("AAAA", 1)).toBe(4);
});

test('No replacements needed', () => {
  expect(characterReplacement("ABCD", 0)).toBe(1);
});

test('Can replace all characters', () => {
  expect(characterReplacement("ABCD", 3)).toBe(4);
});

test('Single character string', () => {
  expect(characterReplacement("A", 1)).toBe(1);
});

test('Empty string', () => {
  expect(characterReplacement("", 1)).toBe(0);
});

test('Large k value', () => {
  expect(characterReplacement("ABCDEF", 5)).toBe(6);
});

test('Alternating characters', () => {
  expect(characterReplacement("ABABAB", 2)).toBe(5);
});

test('Complex case', () => {
  expect(characterReplacement("KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPJQTCROS", 4)).toBe(6);
});