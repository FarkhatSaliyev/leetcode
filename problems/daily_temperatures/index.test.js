const dailyTemperatures = require("./index");

describe("dailyTemperatures", () => {
  test("Example 1: [73,74,75,71,69,72,76,73]", () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    const expected = [1, 1, 4, 2, 1, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Example 2: [30,40,50,60]", () => {
    const temperatures = [30, 40, 50, 60];
    const expected = [1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Example 3: [30,60,90]", () => {
    const temperatures = [30, 60, 90];
    const expected = [1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("All temperatures decreasing", () => {
    const temperatures = [90, 80, 70, 60, 50];
    const expected = [0, 0, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("All temperatures increasing", () => {
    const temperatures = [50, 60, 70, 80, 90];
    const expected = [1, 1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("All temperatures same", () => {
    const temperatures = [70, 70, 70, 70];
    const expected = [0, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Single temperature", () => {
    const temperatures = [75];
    const expected = [0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Two temperatures", () => {
    const temperatures = [70, 80];
    const expected = [1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Complex pattern: [30,38,30,36,35,40,28]", () => {
    const temperatures = [30, 38, 30, 36, 35, 40, 28];
    const expected = [1, 4, 1, 2, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Alternating pattern", () => {
    const temperatures = [70, 80, 70, 80, 70];
    const expected = [1, 0, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Peak in middle", () => {
    const temperatures = [60, 70, 80, 70, 60];
    const expected = [1, 1, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Valley in middle", () => {
    const temperatures = [80, 70, 60, 70, 80];
    const expected = [0, 3, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Negative temperatures", () => {
    const temperatures = [-10, -5, 0, 5, 10];
    const expected = [1, 1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Large temperature differences", () => {
    const temperatures = [0, 100, 0, 100, 0];
    const expected = [1, 0, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Empty array", () => {
    const temperatures = [];
    const expected = [];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Large array with pattern", () => {
    const temperatures = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Descending then ascending", () => {
    const temperatures = [100, 90, 80, 70, 60, 70, 80, 90, 100];
    const expected = [0, 7, 5, 3, 1, 1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Ascending then descending", () => {
    const temperatures = [60, 70, 80, 90, 80, 70, 60];
    const expected = [1, 1, 1, 0, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Multiple peaks", () => {
    const temperatures = [60, 80, 60, 80, 60, 80, 60];
    const expected = [1, 0, 1, 0, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Edge case: all zeros", () => {
    const temperatures = [0, 0, 0, 0, 0];
    const expected = [0, 0, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Edge case: single high temperature", () => {
    const temperatures = [100];
    const expected = [0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Edge case: single low temperature", () => {
    const temperatures = [-50];
    const expected = [0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  test("Verify result array length matches input", () => {
    const temperatures = [70, 75, 80, 85, 90];
    const result = dailyTemperatures(temperatures);
    expect(result.length).toBe(temperatures.length);
  });

  test("Verify all results are non-negative", () => {
    const temperatures = [70, 75, 80, 85, 90];
    const result = dailyTemperatures(temperatures);
    result.forEach((days) => {
      expect(days).toBeGreaterThanOrEqual(0);
    });
  });

  test("Verify last element is always 0", () => {
    const testCases = [[70, 75, 80], [80, 75, 70], [70, 70, 70], [70]];

    testCases.forEach((temperatures) => {
      const result = dailyTemperatures(temperatures);
      expect(result[result.length - 1]).toBe(0);
    });
  });
});
