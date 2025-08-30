
const {LRUCache} = require("./index");

describe("LRUCache", () => {
  test("basic get/put operations", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1); // returns 1
  });

  test("eviction when over capacity", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3); // evicts key 1
    expect(cache.get(1)).toBe(-1); // key 1 was evicted
    expect(cache.get(2)).toBe(2);  // still there
    expect(cache.get(3)).toBe(3);  // just added
  });

  test("update existing key", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10); // update key 1
    expect(cache.get(1)).toBe(10); // updated value
    expect(cache.get(2)).toBe(2);
  });

  test("recently used stays in cache", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);     // key 1 becomes most recent
    cache.put(3, 3);  // evicts key 2 (least recent)
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(3)).toBe(3);
  });

  test("works with capacity 1", () => {
    const cache = new LRUCache(1);

    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);

    cache.put(2, 2); // evicts key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
  });
});
