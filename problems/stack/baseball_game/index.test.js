const calPoints = require('./index');

describe('calPoints', () => {
  test('basic example with all operations', () => {
    const ops = ["5", "2", "C", "D", "+"];
    // Stack steps: [5], [5,2], [5], [5,10], [5,10,15]
    expect(calPoints(ops)).toBe(30);
  });

  test('multiple + operations', () => {
    const ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
    // Stack result: [5, -2, -4, 9, 5, 14]
    expect(calPoints(ops)).toBe(27);
  });

  test('only numeric operations', () => {
    const ops = ["1", "2", "3", "4"];
    expect(calPoints(ops)).toBe(10);
  });

  test('single operation', () => {
    const ops = ["10"];
    expect(calPoints(ops)).toBe(10);
  });

  test('handles negative numbers', () => {
    const ops = ["-5", "-10", "D", "+"];
    // [-5, -10, -20, -30]
    expect(calPoints(ops)).toBe(-65);
  });

  test('C removes last score correctly', () => {
    const ops = ["3", "4", "C"];
    expect(calPoints(ops)).toBe(3);
  });

  test('D doubles last score', () => {
    const ops = ["7", "D"];
    expect(calPoints(ops)).toBe(21);
  });

  test('plus adds last two scores', () => {
    const ops = ["2", "3", "+"];
    expect(calPoints(ops)).toBe(10);
  });

  test('complex mixed operations', () => {
    const ops = ["10", "20", "D", "+", "C", "5", "+"];
    // Step by step:
    // [10]
    // [10,20]
    // [10,20,40]
    // [10,20,40,60]
    // [10,20,40]
    // [10,20,40,5]
    // [10,20,40,45]
    expect(calPoints(ops)).toBe(120);
  });

  test('empty operations array', () => {
    const ops = [];
    expect(calPoints(ops)).toBe(0);
  });
});
