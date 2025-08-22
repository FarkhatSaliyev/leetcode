const searchMatrixFlatten = require("./index");
const searchMatrixScan = require("./index");

describe("searchMatrixFlatten", () => {
    const matrix = [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40]
    ];

    test("should return true if target exists (10)", () => {
        expect(searchMatrixFlatten(matrix, 10)).toBe(true);
    });

    test("should return true if target exists (40)", () => {
        expect(searchMatrixFlatten(matrix, 40)).toBe(true);
    });

    test("should return false if target does not exist (9)", () => {
        expect(searchMatrixFlatten(matrix, 9)).toBe(false);
    });
});

describe("searchMatrixScan", () => {
    const matrix = [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40]
    ];

    test("should return true if target exists (11)", () => {
        expect(searchMatrixScan(matrix, 11)).toBe(true);
    });

    test("should return true if target exists (1)", () => {
        expect(searchMatrixScan(matrix, 1)).toBe(true);
    });

    test("should return false if target does not exist (15)", () => {
        expect(searchMatrixScan(matrix, 15)).toBe(false);
    });
});
