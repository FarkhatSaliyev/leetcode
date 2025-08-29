// Input: l1 = [1,2,5], l2 = [4,5,6]

// Output: [5,7,9]

// Explanation: 321 + 654 = 975.

function addTwoNumbers(l1, l2) {
    let dummy = {val: 0, next: null}
    let node = dummy
    let carry = 0

    while(l1 || l2 || carry){
        let l1Val = l1 ? l1.val : 0
        let l2Val = l2 ? l2.val : 0

        let sum = l1Val + l2Val + carry
        carry = Math.floor(sum/10)
        node.next = {val: sum%10, next: null}
        node = node.next

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }

    return dummy.next
}

module.exports = addTwoNumbers