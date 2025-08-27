# Definition for singly-linked list.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def hasCycle(head) -> bool:
    slow = head
    fast = head 

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False


# ---------- Tests ----------
if __name__ == "__main__":
    # Empty list
    print(hasCycle(None))  # False

    # Single node no cycle
    node1 = ListNode(1)
    print(hasCycle(node1))  # False

    # Single node with cycle
    node1 = ListNode(1)
    node1.next = node1
    print(hasCycle(node1))  # True

    # Multiple nodes, no cycle
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node1.next = node2
    node2.next = node3
    print(hasCycle(node1))  # False

    # Cycle starting at middle (node2)
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node2
    print(hasCycle(node1))  # True

    # Cycle starting at head
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node1.next = node2
    node2.next = node3
    node3.next = node1
    print(hasCycle(node1))  # True