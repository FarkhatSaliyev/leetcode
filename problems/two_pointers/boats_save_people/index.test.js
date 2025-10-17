const numRescueBoats = require('./index');

describe('numRescueBoats', () => {
  test('should return 2 boats for [5,1,4,2] with limit 6', () => {
    const people = [5, 1, 4, 2];
    const limit = 6;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(2);
  });

  test('should handle everyone fitting perfectly in pairs', () => {
    const people = [3, 2, 2, 1];
    const limit = 3;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(3);
  });

  test('should handle all heavy people (each needs own boat)', () => {
    const people = [5, 5, 5];
    const limit = 5;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(3);
  });

  test('should handle all light people (multiple pairings)', () => {
    const people = [1, 1, 1, 1];
    const limit = 2;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(2);
  });

  test('should handle uneven group (one leftover person)', () => {
    const people = [1, 2, 2, 3];
    const limit = 3;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(3);
  });

  test('should handle single person', () => {
    const people = [4];
    const limit = 5;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(1);
  });

  test('should handle empty list (no people)', () => {
    const people = [];
    const limit = 10;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(0);
  });

  test('should handle high limit where everyone fits in few boats', () => {
    const people = [3, 2, 2, 1];
    const limit = 10;
    const result = numRescueBoats(people, limit);
    expect(result).toBe(2);
  });
});
