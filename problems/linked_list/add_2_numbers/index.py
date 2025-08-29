# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    dummy = ListNode()
    node = dummy
    carry = 0

    while l1 or l2 or carry:
        l1Val = 0
        if l1:
            l1Val = l1.val
        l2Val = 0
        if l2:
            l2Val = l2.val
        
        sum = l1Val + l2Val + carry
        carry = sum // 10
        node.next = ListNode(sum % 10, None)
        node = node.next

        if l1:
            l1=l1.next
        if l2:
            l2=l2.next

    return dummy.next


def list_to_linkedlist(lst):
    dummy = ListNode()
    curr = dummy
    for num in lst:
        curr.next = ListNode(num)
        curr = curr.next
    return dummy.next

def linkedlist_to_list(node):
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result

def test_addTwoNumbers():
    # Test 1: 342 + 465 = 807
    l1 = list_to_linkedlist([2,4,3])
    l2 = list_to_linkedlist([5,6,4])
    result = addTwoNumbers(l1, l2)
    assert linkedlist_to_list(result) == [7,0,8]

    # Test 2: 0 + 0 = 0
    l1 = list_to_linkedlist([0])
    l2 = list_to_linkedlist([0])
    result = addTwoNumbers(l1, l2)
    assert linkedlist_to_list(result) == [0]

    # Test 3: 999 + 1 = 1000
    l1 = list_to_linkedlist([9,9,9])
    l2 = list_to_linkedlist([1])
    result = addTwoNumbers(l1, l2)
    assert linkedlist_to_list(result) == [0,0,0,1]

    # Test 4: Different lengths, 81 + 0 = 81
    l1 = list_to_linkedlist([1,8])
    l2 = list_to_linkedlist([0])
    result = addTwoNumbers(l1, l2)
    assert linkedlist_to_list(result) == [1,8]

    print("All tests passed ✅")

test_addTwoNumbers()
