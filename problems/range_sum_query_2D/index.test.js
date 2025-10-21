const NumMatrix = require('./index');

describe('NumMatrix', () => {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ];

  let numMatrix;

  beforeEach(() => {
    numMatrix = new NumMatrix(matrix);
  });

  test('should correctly calculate region sum (case 1)', () => {
    const result = numMatrix.sumRegion(2, 1, 4, 3);
    expect(result).toBe(8);
  });

  test('should correctly calculate region sum (case 2)', () => {
    const result = numMatrix.sumRegion(1, 1, 2, 2);
    expect(result).toBe(11);
  });

  test('should correctly calculate region sum (case 3)', () => {
    const result = numMatrix.sumRegion(1, 2, 2, 4);
    expect(result).toBe(12);
  });

  test('should return correct sum for full matrix', () => {
    const result = numMatrix.sumRegion(0, 0, 4, 4);
    expect(result).toBe(58);
  });

  test('should return single cell value when same start and end', () => {
    const result = numMatrix.sumRegion(0, 0, 0, 0);
    expect(result).toBe(3);
  });

  test('should handle submatrix from top-left corner', () => {
    const result = numMatrix.sumRegion(0, 0, 1, 1);
    // [3,0;5,6] => 3+0+5+6=14
    expect(result).toBe(14);
  });
});
