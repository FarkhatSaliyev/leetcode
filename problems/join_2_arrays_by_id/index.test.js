const joinById = require('./index');

describe('join function', () => {
    
    test('should merge two arrays with overlapping ids', () => {
        const arr1 = [
            {id: 1, name: "John", age: 30},
            {id: 2, name: "Jane", age: 25}
        ];
        const arr2 = [
            {id: 1, age: 31, city: "NYC"},
            {id: 2, city: "LA"}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, name: "John", age: 31, city: "NYC"},
            {id: 2, name: "Jane", age: 25, city: "LA"}
        ]);
    });

    test('should add new objects from arr2 that dont exist in arr1', () => {
        const arr1 = [
            {id: 1, x: 1}
        ];
        const arr2 = [
            {id: 2, x: 2},
            {id: 3, x: 3}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, x: 1},
            {id: 2, x: 2},
            {id: 3, x: 3}
        ]);
    });

    test('should keep objects from arr1 that dont exist in arr2', () => {
        const arr1 = [
            {id: 1, name: "Alice"},
            {id: 2, name: "Bob"},
            {id: 3, name: "Charlie"}
        ];
        const arr2 = [
            {id: 1, age: 25}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, name: "Alice", age: 25},
            {id: 2, name: "Bob"},
            {id: 3, name: "Charlie"}
        ]);
    });

    test('should return sorted array by id in ascending order', () => {
        const arr1 = [
            {id: 3, x: 3},
            {id: 1, x: 1}
        ];
        const arr2 = [
            {id: 2, x: 2}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result[0].id).toBe(1);
        expect(result[1].id).toBe(2);
        expect(result[2].id).toBe(3);
    });

    test('should handle empty arr1', () => {
        const arr1 = [];
        const arr2 = [
            {id: 1, name: "John"},
            {id: 2, name: "Jane"}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, name: "John"},
            {id: 2, name: "Jane"}
        ]);
    });

    test('should handle empty arr2', () => {
        const arr1 = [
            {id: 1, name: "John"},
            {id: 2, name: "Jane"}
        ];
        const arr2 = [];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, name: "John"},
            {id: 2, name: "Jane"}
        ]);
    });

    test('should handle both arrays empty', () => {
        const arr1 = [];
        const arr2 = [];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([]);
    });

    test('should override arr1 properties with arr2 properties when ids match', () => {
        const arr1 = [
            {id: 1, name: "John", age: 30, city: "Boston"}
        ];
        const arr2 = [
            {id: 1, age: 35, city: "NYC"}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, name: "John", age: 35, city: "NYC"}
        ]);
    });

    test('should handle objects with many properties', () => {
        const arr1 = [
            {id: 1, a: 1, b: 2, c: 3, d: 4}
        ];
        const arr2 = [
            {id: 1, e: 5, f: 6, g: 7}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7}
        ]);
    });

    test('should handle non-sequential ids', () => {
        const arr1 = [
            {id: 10, x: 1},
            {id: 100, x: 2}
        ];
        const arr2 = [
            {id: 50, x: 3},
            {id: 10, y: 4}
        ];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 10, x: 1, y: 4},
            {id: 50, x: 3},
            {id: 100, x: 2}
        ]);
    });

    test('should not mutate original arrays', () => {
        const arr1 = [{id: 1, name: "John"}];
        const arr2 = [{id: 1, age: 30}];
        
        const arr1Copy = JSON.parse(JSON.stringify(arr1));
        const arr2Copy = JSON.parse(JSON.stringify(arr2));
        
        joinById(arr1, arr2);
        
        expect(arr1).toEqual(arr1Copy);
        expect(arr2).toEqual(arr2Copy);
    });

    test('should handle duplicate ids in same array', () => {
        const arr1 = [
            {id: 1, x: 1},
            {id: 1, y: 2}  // duplicate id
        ];
        const arr2 = [
            {id: 1, z: 3}
        ];
        
        const result = joinById(arr1, arr2);
        
        // Last occurrence wins
        expect(result).toEqual([
            {id: 1, y: 2, z: 3}
        ]);
    });

    test('should handle single element arrays', () => {
        const arr1 = [{id: 1, name: "Solo"}];
        const arr2 = [{id: 2, name: "Duo"}];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, name: "Solo"},
            {id: 2, name: "Duo"}
        ]);
    });

    test('should preserve all properties from both arrays', () => {
        const arr1 = [{id: 1, prop1: "a", prop2: "b"}];
        const arr2 = [{id: 1, prop3: "c", prop4: "d"}];
        
        const result = joinById(arr1, arr2);
        
        expect(result[0]).toHaveProperty('prop1', 'a');
        expect(result[0]).toHaveProperty('prop2', 'b');
        expect(result[0]).toHaveProperty('prop3', 'c');
        expect(result[0]).toHaveProperty('prop4', 'd');
    });

    test('should handle objects with falsy values', () => {
        const arr1 = [{id: 1, value: 0, flag: false, text: ""}];
        const arr2 = [{id: 1, extra: null}];
        
        const result = joinById(arr1, arr2);
        
        expect(result).toEqual([
            {id: 1, value: 0, flag: false, text: "", extra: null}
        ]);
    });
});