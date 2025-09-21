const numIslands = require('./index');

describe("numIslands", () => {
  test("should return 0 for empty grid", () => {
    expect(numIslands([])).toBe(0);
  });

  test("should return 1 for a grid with a single island", () => {
    const grid = [
      ['1', '1', '0'],
      ['1', '1', '0'],
      ['0', '0', '0']
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test("should return 3 for multiple small islands", () => {
    const grid = [
      ['1', '0', '1'],
      ['0', '1', '0'],
      ['1', '0', '1']
    ];
    expect(numIslands(grid)).toBe(5); // 5 separate '1's not touching
  });

  test("should return 1 for all land connected", () => {
    const grid = [
      ['1', '1'],
      ['1', '1']
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test("should return correct count for mixed islands", () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ];
    expect(numIslands(grid)).toBe(3);
  });
});
