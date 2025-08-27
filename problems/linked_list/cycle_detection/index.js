function hasCycle(head) {
    let slow = head
    let fast = head
    // s 
    // f
    //[1,2,3,4]
    // ^-----|
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if(slow === fast){
            return true
        }
    }
    return false
}

module.exports = hasCycle