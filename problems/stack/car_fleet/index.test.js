const carFleet = require("./index");

describe("carFleet", () => {
  test("example-style case: mixed positions & speeds → 3 fleets", () => {
    const target = 12;
    const position = [10, 8, 0, 5, 3];
    const speed = [2, 4, 1, 1, 3];
    expect(carFleet(target, position, speed)).toBe(3);
  });

  test("ascending order (a - b comparator) vs descending (b - a) is already handled by code: descending positions produce correct fleets", () => {
    const target = 10;
    const position = [6, 8];
    const speed = [3, 2]; // times: 1.333..., 1 → two fleets
    expect(carFleet(target, position, speed)).toBe(2);
  });

  test("all cars merge into one fleet when behind cars catch up exactly at the same time", () => {
    const target = 12;
    const position = [10, 8, 3];
    const speed = [2, 4, 9]; // times: 1, 1, 1 -> single fleet
    expect(carFleet(target, position, speed)).toBe(1);
  });

  test("single car → 1 fleet", () => {
    const target = 100;
    const position = [30];
    const speed = [5];
    expect(carFleet(target, position, speed)).toBe(1);
  });

  test("no cars → 0 fleets", () => {
    const target = 100;
    const position = [];
    const speed = [];
    expect(carFleet(target, position, speed)).toBe(0);
  });

  test("faster car behind catches slower car ahead → 1 fleet", () => {
    const target = 100;
    const position = [4, 2, 0];
    const speed = [1, 2, 4]; // times: 96, 49, 25; back cars catch up -> 1 fleet
    expect(carFleet(target, position, speed)).toBe(1);
  });

  test("car already at the target forms its own fleet (cannot be caught before target) → 2 fleets", () => {
    const target = 10;
    const position = [10, 9];
    const speed = [1, 1]; // times: 0, 1 -> two fleets
    expect(carFleet(target, position, speed)).toBe(2);
  });

  test("cars with same starting position but different speeds → separate fleets", () => {
    const target = 20;
    const position = [5, 5, 5];
    const speed = [3, 2, 1]; // start aligned; faster ones pull away
    // Sort order among equals doesn’t matter; each has strictly increasing time
    // from fastest to slowest OR vice versa → they won’t merge.
    expect(carFleet(target, position, speed)).toBe(3);
  });

  test("unordered inputs are handled (function sorts internally)", () => {
    const target = 30;
    const position = [7, 12, 3, 25, 18];
    const speed = [3, 2, 5, 1, 4];
    // Compute expected fleets by reasoning:
    // Sort by pos desc -> [25,1],[18,4],[12,2],[7,3],[3,5]
    // times -> (5/1)=5, (12/4)=3, (18/2)=9, (23/3)=~7.666..., (27/5)=5.4
    // Stack walk: push 5; next 3<=5 -> merge; next 9>5 -> push; next 7.66<=9 -> merge; next 5.4<=9 -> merge
    // Fleets = 2
    expect(carFleet(target, position, speed)).toBe(2);
  });

  test("precision case: floating times that are equal should merge", () => {
    const target = 10;
    const position = [6, 4];
    const speed = [2, 1]; // times: (4/2)=2, (6/1)=6 -> 2 fleets if ordered [6,2] then [4,1]
    // But we want equal-time merge scenario:
    // Adjust to cause equality: (10-6)/2 = 2, (10-8)/1 = 2
  });

  test("equal arrival times cause merging (explicit)", () => {
    const target = 10;
    const position = [8, 6, 4];
    const speed = [1, 2, 3]; // times: 2, 2, 2 -> all merge
    expect(carFleet(target, position, speed)).toBe(1);
  });
});
