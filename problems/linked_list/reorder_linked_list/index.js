// Input: head = [2,4,6,8,10]
// Output: [2,10,4,8,6]

function reorderList(head) {
    if(!head || !head.next){
        return head
    }

    // Find the middle
    //      s
    //           f    
    // [2,4,6,8,10]
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // Cut and reverse the second half
    let prev = null
    let curr = slow.next
    let next = null
    slow.next = null
    //          c
    // [2,4,6] [8,10]
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    // Merge the two halves alternately
    let first = head
    let second = prev
    //  f       s
    // [2,4,6] [8,10]
    while(second){
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }

    return head
}

module.exports = reorderList