# Definition for singly-linked list.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reorderList(head) -> ListNode:
    # Find the middle 
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Cut and reverse list
    #           c
    # [2,4,6] [ 8,10]
    # 
    prev = None
    curr = slow.next
    next = None
    slow.next = None
    while curr:
        next = curr.next
        curr.next = prev 
        prev = curr
        curr = next

    #Merge 2 halves list
    # [2,4,6] [ 8,10]
    first = head
    second = prev

    while second:
        temp1 = first.next
        temp2 = second.next   

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2

    return head
    
def list_to_linked(lst):
    dummy = ListNode(0)
    curr = dummy
    for v in lst:
        curr.next = ListNode(v)
        curr = curr.next
    return dummy.next

def linked_to_list(node):
    out = []
    while node:
        out.append(node.val)
        node = node.next
    return out

if __name__ == "__main__":
    # Test 1: even length
    head = list_to_linked([1,2,3,4])
    new_head = reorderList(head)
    assert linked_to_list(new_head) == [1,4,2,3]

    # Test 2: odd length
    head = list_to_linked([1,2,3,4,5])
    new_head = reorderList(head)
    assert linked_to_list(new_head) == [1,5,2,4,3]

    # Test 3: two nodes
    head = list_to_linked([1,2])
    new_head = reorderList(head)
    assert linked_to_list(new_head) == [1,2]

    # Test 4: single node
    head = list_to_linked([1])
    new_head = reorderList(head)
    assert linked_to_list(new_head) == [1]

    print("All tests passed ✅")