const reverseString = require('./index');

describe('reverseString', () => {
    test('reverses a simple string', () => {
      const input = ['h', 'e', 'l', 'l', 'o'];
      reverseString(input);
      expect(input).toEqual(['o', 'l', 'l', 'e', 'h']);
    });
  
    test('reverses a string with even length', () => {
      const input = ['a', 'b', 'c', 'd'];
      reverseString(input);
      expect(input).toEqual(['d', 'c', 'b', 'a']);
    });
  
    test('reverses a string with odd length', () => {
      const input = ['a', 'b', 'c'];
      reverseString(input);
      expect(input).toEqual(['c', 'b', 'a']);
    });
  
    test('handles a two-character array', () => {
      const input = ['a', 'b'];
      reverseString(input);
      expect(input).toEqual(['b', 'a']);
    });
  
    test('handles a single-character array', () => {
      const input = ['a'];
      reverseString(input);
      expect(input).toEqual(['a']);
    });
  
    test('handles an empty array', () => {
      const input = [];
      reverseString(input);
      expect(input).toEqual([]);
    });
  
    test('reverses array with special characters', () => {
      const input = ['!', '@', '#', '$'];
      reverseString(input);
      expect(input).toEqual(['$', '#', '@', '!']);
    });
  
    test('reverses array with numbers as strings', () => {
      const input = ['1', '2', '3', '4', '5'];
      reverseString(input);
      expect(input).toEqual(['5', '4', '3', '2', '1']);
    });
  
    test('reverses array with mixed characters', () => {
      const input = ['H', 'a', 'n', 'n', 'a', 'h'];
      reverseString(input);
      expect(input).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
    });
  
    test('modifies the original array (in-place)', () => {
      const input = ['a', 'b', 'c'];
      const originalReference = input;
      reverseString(input);
      expect(input).toBe(originalReference); // Same reference
      expect(input).toEqual(['c', 'b', 'a']);
    });
  });