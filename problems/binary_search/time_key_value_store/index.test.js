const TimeMap = require("./index");

describe("TimeMap", () => {
  test("set and get with exact timestamp", () => {
    const tm = new TimeMap();
    tm.set("foo", "bar", 1);
    expect(tm.get("foo", 1)).toBe("bar");
  });

  test("get with earlier timestamp should return empty string", () => {
    const tm = new TimeMap();
    tm.set("foo", "bar", 5);
    expect(tm.get("foo", 2)).toBe("");
  });

  test("get with timestamp between two sets returns closest earlier value", () => {
    const tm = new TimeMap();
    tm.set("foo", "bar1", 1);
    tm.set("foo", "bar2", 4);
    tm.set("foo", "bar3", 8);

    expect(tm.get("foo", 6)).toBe("bar2");
    expect(tm.get("foo", 7)).toBe("bar2");
    expect(tm.get("foo", 8)).toBe("bar3");
  });

  test("multiple keys handled independently", () => {
    const tm = new TimeMap();
    tm.set("foo", "bar1", 1);
    tm.set("baz", "qux1", 2);

    expect(tm.get("foo", 1)).toBe("bar1");
    expect(tm.get("baz", 2)).toBe("qux1");
    expect(tm.get("baz", 1)).toBe("");
  });

  test("no values for non-existing key", () => {
    const tm = new TimeMap();
    expect(tm.get("unknown", 10)).toBe("");
  });

  test("increasing timestamps preserve order", () => {
    const tm = new TimeMap();
    tm.set("foo", "bar1", 1);
    tm.set("foo", "bar2", 3);
    tm.set("foo", "bar3", 5);

    expect(tm.get("foo", 2)).toBe("bar1");
    expect(tm.get("foo", 3)).toBe("bar2");
    expect(tm.get("foo", 10)).toBe("bar3");
  });
});
