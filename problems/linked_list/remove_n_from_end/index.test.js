const removeNthFromEnd = require("./index");

// Helpers
function arrayToList(arr) {
    let dummy = { val: 0, next: null };
    let curr = dummy;
    for (let num of arr) {
        curr.next = { val: num, next: null };
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let result = [];
    let curr = head;
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

describe("removeNthFromEnd", () => {
    test("removes from middle of list", () => {
        const head = arrayToList([1,2,3,4,5]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([1,2,3,5]);
    });

    test("removes last element", () => {
        const head = arrayToList([1,2,3]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([1,2]);
    });

    test("removes first element", () => {
        const head = arrayToList([1,2,3]);
        const result = removeNthFromEnd(head, 3);
        expect(listToArray(result)).toEqual([2,3]);
    });

    test("removes only node in single-element list", () => {
        const head = arrayToList([10]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([]);
    });

    test("two-element list, remove first", () => {
        const head = arrayToList([1,2]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([2]);
    });

    test("two-element list, remove second", () => {
        const head = arrayToList([1,2]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([1]);
    });
});
