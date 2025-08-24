const findMin = require("./index");

describe("findMin", () => {
    test("Rotated array with pivot in the middle", () => {
        expect(findMin([3,4,5,1,2])).toBe(1);
    });

    test("Rotated array with pivot towards the end", () => {
        expect(findMin([4,5,6,7,0,1,2])).toBe(0);
    });

    test("Already sorted array (no rotation)", () => {
        expect(findMin([1,2,3,4,5])).toBe(1);
    });

    test("Array rotated only once", () => {
        expect(findMin([2,3,4,5,1])).toBe(1);
    });

    test("Array with just one element", () => {
        expect(findMin([10])).toBe(10);
    });

    test("Array with two elements, rotated", () => {
        expect(findMin([2,1])).toBe(1);
    });

    test("Array with two elements, sorted", () => {
        expect(findMin([1,2])).toBe(1);
    });

    test("Large rotation", () => {
        expect(findMin([30,40,50,10,20])).toBe(10);
    });

    test("Edge case: descending rotated array", () => {
        expect(findMin([5,6,7,8,1,2,3,4])).toBe(1);
    });
});
