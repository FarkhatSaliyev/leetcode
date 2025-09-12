const MedianFinder = require("./index"); // adjust if your class is exported differently

describe("MedianFinder", () => {
  let mf;

  beforeEach(() => {
    mf = new MedianFinder();
  });

  test("returns 0 when no numbers added", () => {
    expect(mf.findMedian()).toBe(0);
  });

  test("returns correct median with one element", () => {
    mf.addNum(1);
    expect(mf.findMedian()).toBe(1);
  });

  test("returns correct median with two elements", () => {
    mf.addNum(1);
    mf.addNum(2);
    expect(mf.findMedian()).toBe(1.5);
  });

  test("returns correct median with odd number of elements", () => {
    mf.addNum(1);
    mf.addNum(2);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(2);
  });

  test("returns correct median with even number of elements", () => {
    mf.addNum(1);
    mf.addNum(2);
    mf.addNum(3);
    mf.addNum(4);
    expect(mf.findMedian()).toBe(2.5);
  });

  test("works with negative numbers", () => {
    mf.addNum(-5);
    mf.addNum(-1);
    mf.addNum(1);
    mf.addNum(2);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(1);
  });

  test("works with unsorted input", () => {
    mf.addNum(10);
    mf.addNum(2);
    mf.addNum(5);
    expect(mf.findMedian()).toBe(5);
  });
});
