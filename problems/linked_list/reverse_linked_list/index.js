
// Input: head = [0,1,2,3]
// Output: [3,2,1,0]

function reverseList(head) {
    let prev = null
    let curr = head
    let next = null

    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

module.exports = reverseList