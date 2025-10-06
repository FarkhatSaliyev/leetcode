const validPalindrome = require('./index')

describe('validPalindrome', () => {
    test('returns true for a valid palindrome without deletion', () => {
      expect(validPalindrome('aba')).toBe(true);
    });
  
    test('returns true for a palindrome by deleting one character from the left', () => {
      expect(validPalindrome('abca')).toBe(true); // Remove 'c'
    });
  
    test('returns true for a palindrome by deleting one character from the right', () => {
      expect(validPalindrome('abbda')).toBe(true); // Remove 'd'
    });
  
    test('returns true for already perfect palindrome', () => {
      expect(validPalindrome('racecar')).toBe(true);
    });
  
    test('returns false when no single deletion makes it a palindrome', () => {
      expect(validPalindrome('abc')).toBe(false);
    });
  
    test('returns true for two-character string', () => {
      expect(validPalindrome('ab')).toBe(true); // Remove either char
    });
  
    test('returns true for single character', () => {
      expect(validPalindrome('a')).toBe(true);
    });
  
    test('returns true for empty string', () => {
      expect(validPalindrome('')).toBe(true);
    });
  
    test('returns true when deletion is at the beginning', () => {
      expect(validPalindrome('deeee')).toBe(true); // Remove 'd'
    });
  
    test('returns true for even-length palindrome with one deletion', () => {
      expect(validPalindrome('abcba')).toBe(true); // Remove 'c'
    });
  
    test('returns false for string requiring multiple deletions', () => {
      expect(validPalindrome('abcdef')).toBe(false);
    });
  
    test('handles case with mismatch in the middle', () => {
      expect(validPalindrome('aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga')).toBe(true);
    });
  
    test('returns false when characters differ by more than one deletion', () => {
      expect(validPalindrome('abccda')).toBe(false);
    });
  
    test('handles repeated characters correctly', () => {
      expect(validPalindrome('aaaabaaa')).toBe(true); // Remove 'b'
    });
  
    test('returns true for two identical characters with one extra', () => {
      expect(validPalindrome('aab')).toBe(true); // Remove 'a' or 'b'
    });
  
    test('returns true for mirror pattern with one extra character', () => {
      expect(validPalindrome('abccdba')).toBe(true); // Remove one 'c'
    });
  
    test('case sensitivity - different cases are different characters', () => {
      expect(validPalindrome('Aa')).toBe(true); // Can remove either
    });
  });