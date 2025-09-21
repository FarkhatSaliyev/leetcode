const maxAreaOfIsland = require('./index');

describe("maxAreaOfIsland", () => {
  test("should return 0 for empty grid", () => {
    expect(maxAreaOfIsland([])).toBe(0);
  });

  test("should return 0 when grid has no land", () => {
    const grid = [
      [0, 0],
      [0, 0]
    ];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });

  test("should return 1 for single land cell", () => {
    const grid = [
      [0, 1],
      [0, 0]
    ];
    expect(maxAreaOfIsland(grid)).toBe(1);
  });

  test("should return 4 for 2x2 island", () => {
    const grid = [
      [1, 1],
      [1, 1]
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
  });

  test("should return 6 for provided example grid", () => {
    const grid = [
      [0,1,1,0,1],
      [1,0,1,0,1],
      [0,1,1,0,1],
      [0,1,0,0,1]
    ];
    expect(maxAreaOfIsland(grid)).toBe(6);
  });

  test("should return correct area when multiple islands present", () => {
    const grid = [
      [1,0,0,1],
      [1,0,0,1],
      [0,0,0,1],
      [1,1,0,0]
    ];
    // largest island is the vertical line on the right (3 cells)
    expect(maxAreaOfIsland(grid)).toBe(3);
  });
});
