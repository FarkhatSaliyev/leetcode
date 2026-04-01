const { canSing, converter } = require('./index');

describe('converter', () => {
  test('maps pitch letter and octave to linear value', () => {
    expect(converter('C0')).toBe(0);
    expect(converter('D0')).toBe(1);
    expect(converter('F0')).toBe(2);
    expect(converter('C1')).toBe(7);
    expect(converter('D1')).toBe(8);
    expect(converter('F1')).toBe(9);
  });
});

describe('canSing', () => {
  test('returns true when every note is within inclusive range', () => {
    expect(canSing(['C0', 'D0', 'F0'], 'C0', 'F0')).toBe(true);
    expect(canSing(['C1', 'D1'], 'C0', 'F1')).toBe(true);
  });

  test('returns false when a note is below the range', () => {
    expect(canSing(['C0', 'D1'], 'D0', 'F1')).toBe(false);
  });

  test('returns false when a note is above the range', () => {
    expect(canSing(['C1', 'F1'], 'C0', 'C1')).toBe(false);
  });

  test('returns true for an empty song', () => {
    expect(canSing([], 'C0', 'F0')).toBe(true);
  });

  test('boundary notes are inclusive', () => {
    expect(canSing(['C0'], 'C0', 'C0')).toBe(true);
    expect(canSing(['F2'], 'F2', 'F2')).toBe(true);
  });
});
