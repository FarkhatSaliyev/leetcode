const mergeAlternately = require('./index')

describe('mergeAlternately', () => {
    test('merges two strings of equal length', () => {
      expect(mergeAlternately('abc', 'def')).toBe('adbecf');
    });
  
    test('merges when word1 is longer than word2', () => {
      expect(mergeAlternately('abcd', 'ef')).toBe('aebfcd');
    });
  
    test('merges when word2 is longer than word1', () => {
      expect(mergeAlternately('ab', 'defg')).toBe('adbefg');
    });
  
    test('handles single character in both strings', () => {
      expect(mergeAlternately('a', 'b')).toBe('ab');
    });
  
    test('handles empty word1', () => {
      expect(mergeAlternately('', 'abc')).toBe('abc');
    });
  
    test('handles empty word2', () => {
      expect(mergeAlternately('abc', '')).toBe('abc');
    });
  
    test('handles both empty strings', () => {
      expect(mergeAlternately('', '')).toBe('');
    });
  
    test('merges with word1 much longer than word2', () => {
      expect(mergeAlternately('abcdefgh', 'xy')).toBe('axbycdefgh');
    });
  
    test('merges with word2 much longer than word1', () => {
      expect(mergeAlternately('xy', 'abcdefgh')).toBe('xaybcdefgh');
    });
  
    test('handles single character in word1 and longer word2', () => {
      expect(mergeAlternately('a', 'bcde')).toBe('abcde');
    });
  
    test('handles longer word1 and single character in word2', () => {
      expect(mergeAlternately('abcd', 'e')).toBe('aebcd');
    });
  
    test('merges strings with numbers as characters', () => {
      expect(mergeAlternately('123', '456')).toBe('142536');
    });
  
    test('merges strings with special characters', () => {
      expect(mergeAlternately('!@#', '$%^')).toBe('!$@%#^');
    });
  
    test('handles very long equal strings', () => {
      const word1 = 'a'.repeat(100);
      const word2 = 'b'.repeat(100);
      const expected = 'ab'.repeat(100);
      expect(mergeAlternately(word1, word2)).toBe(expected);
    });
  
    test('merges with different case letters', () => {
      expect(mergeAlternately('ABC', 'xyz')).toBe('AxByCz');
    });
  
    test('example from problem: word1 longer', () => {
      expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
    });
  
    test('example from problem: word2 longer', () => {
      expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
    });
  });