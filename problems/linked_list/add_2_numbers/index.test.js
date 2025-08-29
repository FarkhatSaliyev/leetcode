const addTwoNumbers = require('./index')

// Helper: create linked list from array
function buildList(arr) {
    let dummy = { val: 0, next: null }
    let curr = dummy
    for (let num of arr) {
        curr.next = { val: num, next: null }
        curr = curr.next
    }
    return dummy.next
}

// Helper: convert linked list back to array
function listToArray(node) {
    let arr = []
    while (node) {
        arr.push(node.val)
        node = node.next
    }
    return arr
}

describe('addTwoNumbers', () => {
    test('adds two lists of equal length', () => {
        const l1 = buildList([2, 4, 3]) // 342
        const l2 = buildList([5, 6, 4]) // 465
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([7, 0, 8]) // 807
    })

    test('adds lists of different length', () => {
        const l1 = buildList([9, 9])   // 99
        const l2 = buildList([1])      // 1
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([0, 0, 1]) // 100
    })

    test('handles carry over at the end', () => {
        const l1 = buildList([5])   // 5
        const l2 = buildList([5])   // 5
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([0, 1]) // 10
    })

    test('handles when one list is empty', () => {
        const l1 = null
        const l2 = buildList([7, 3])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([7, 3])
    })

    test('handles both empty lists', () => {
        const l1 = null
        const l2 = null
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([])
    })
})
