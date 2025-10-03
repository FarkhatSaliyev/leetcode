const MyHashMap = require('./index'); // assuming your class is in index.js

describe('MyHashMap', () => {
    let map;

    beforeEach(() => {
        map = new MyHashMap();
    });

    test('should put and get values correctly', () => {
        map.put(1, 1);
        map.put(2, 2);

        expect(map.get(1)).toBe(1);
        expect(map.get(2)).toBe(2);
        expect(map.get(3)).toBe(-1);
    });

    test('should update value for existing key', () => {
        map.put(2, 2);
        map.put(2, 10); // update key 2
        expect(map.get(2)).toBe(10);
    });

    test('should remove key correctly', () => {
        map.put(1, 1);
        map.remove(1);
        expect(map.get(1)).toBe(-1);
    });

    test('should handle multiple operations in sequence', () => {
        map.put(1, 1);
        map.put(2, 2);
        expect(map.get(1)).toBe(1);
        expect(map.get(3)).toBe(-1);
        map.put(2, 1);
        expect(map.get(2)).toBe(1);
        map.remove(2);
        expect(map.get(2)).toBe(-1);
    });
});
