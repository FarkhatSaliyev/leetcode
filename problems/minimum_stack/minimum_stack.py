class Node:
    def __init__(self, val, min_val):
        self.val = val
        self.next = None
        self.min = min_val

class MinStack:
    def __init__(self):
        self.head = None
    
    def push(self, val: int) -> None:
        if not self.head:
            new_node = Node(val, val)
        else: 
            new_min = min(self.head.min, val)
            new_node = Node(val, new_min)
            new_node.next = self.head
        
        self.head = new_node

    def pop(self) -> None:
        if not self.head:
            return None
        self.head = self.head.next

    def top(self) -> int:
        if not self.head:
            return None
        return self.head.val
    
    def getMin(self) -> int:
        if not self.head: 
            return None
        return self.head.min


# Test cases
import unittest

class TestMinStack(unittest.TestCase):
    def setUp(self):
        self.min_stack = MinStack()

    def test_constructor(self):
        """Test that constructor creates an empty stack"""
        self.assertIsNone(self.min_stack.head)

    def test_push_single_element(self):
        """Test pushing a single element"""
        self.min_stack.push(5)
        self.assertEqual(self.min_stack.head.val, 5)
        self.assertEqual(self.min_stack.head.min, 5)

    def test_push_multiple_elements(self):
        """Test pushing multiple elements and tracking minimum"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(7)
        
        self.assertEqual(self.min_stack.head.val, 7)
        self.assertEqual(self.min_stack.head.min, 3)

    def test_push_negative_numbers(self):
        """Test handling negative numbers"""
        self.min_stack.push(-5)
        self.min_stack.push(3)
        self.min_stack.push(-10)
        
        self.assertEqual(self.min_stack.head.val, -10)
        self.assertEqual(self.min_stack.head.min, -10)

    def test_push_duplicate_minimum(self):
        """Test handling duplicate minimum values"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(3)
        
        self.assertEqual(self.min_stack.head.val, 3)
        self.assertEqual(self.min_stack.head.min, 3)

    def test_push_zero_values(self):
        """Test handling zero values"""
        self.min_stack.push(0)
        self.min_stack.push(5)
        self.min_stack.push(-1)
        
        self.assertEqual(self.min_stack.head.val, -1)
        self.assertEqual(self.min_stack.head.min, -1)

    def test_pop_empty_stack(self):
        """Test popping from empty stack"""
        self.assertIsNone(self.min_stack.pop())

    def test_pop_single_element(self):
        """Test popping single element"""
        self.min_stack.push(5)
        self.min_stack.pop()
        self.assertIsNone(self.min_stack.head)

    def test_pop_multiple_elements(self):
        """Test popping multiple elements and maintaining minimum tracking"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(7)
        
        self.min_stack.pop()  # pop 7
        self.assertEqual(self.min_stack.head.val, 3)
        self.assertEqual(self.min_stack.head.min, 3)
        
        self.min_stack.pop()  # pop 3
        self.assertEqual(self.min_stack.head.val, 5)
        self.assertEqual(self.min_stack.head.min, 5)

    def test_pop_when_minimum_changes(self):
        """Test popping when minimum changes"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(7)
        self.min_stack.push(1)
        
        self.min_stack.pop()  # pop 1 (was minimum)
        self.assertEqual(self.min_stack.head.val, 7)
        self.assertEqual(self.min_stack.head.min, 3)

    def test_top_empty_stack(self):
        """Test top on empty stack"""
        self.assertIsNone(self.min_stack.top())

    def test_top_single_element(self):
        """Test top on single element"""
        self.min_stack.push(5)
        self.assertEqual(self.min_stack.top(), 5)

    def test_top_multiple_elements(self):
        """Test top after multiple pushes"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(7)
        self.assertEqual(self.min_stack.top(), 7)

    def test_top_after_pop(self):
        """Test top after pop"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.pop()
        self.assertEqual(self.min_stack.top(), 5)

    def test_getMin_empty_stack(self):
        """Test getMin on empty stack"""
        self.assertIsNone(self.min_stack.getMin())

    def test_getMin_single_element(self):
        """Test getMin on single element"""
        self.min_stack.push(5)
        self.assertEqual(self.min_stack.getMin(), 5)

    def test_getMin_multiple_elements(self):
        """Test getMin on multiple elements"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(7)
        self.assertEqual(self.min_stack.getMin(), 3)

    def test_getMin_after_pop(self):
        """Test getMin after pop operations"""
        self.min_stack.push(5)
        self.min_stack.push(3)
        self.min_stack.push(7)
        self.min_stack.push(1)
        
        self.min_stack.pop()  # pop 1
        self.assertEqual(self.min_stack.getMin(), 3)
        
        self.min_stack.pop()  # pop 7
        self.assertEqual(self.min_stack.getMin(), 3)
        
        self.min_stack.pop()  # pop 3
        self.assertEqual(self.min_stack.getMin(), 5)

    def test_getMin_negative(self):
        """Test getMin with negative numbers"""
        self.min_stack.push(5)
        self.min_stack.push(-3)
        self.min_stack.push(7)
        self.assertEqual(self.min_stack.getMin(), -3)

    def test_getMin_zero(self):
        """Test getMin with zero"""
        self.min_stack.push(5)
        self.min_stack.push(0)
        self.min_stack.push(7)
        self.assertEqual(self.min_stack.getMin(), 0)

    def test_leetcode_example(self):
        """Test with LeetCode example"""
        self.min_stack.push(-2)
        self.min_stack.push(0)
        self.min_stack.push(-3)
        
        self.assertEqual(self.min_stack.getMin(), -3)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.top(), 0)
        self.assertEqual(self.min_stack.getMin(), -2)

    def test_complex_sequence(self):
        """Test complex sequence of operations"""
        self.min_stack.push(10)
        self.assertEqual(self.min_stack.getMin(), 10)
        self.assertEqual(self.min_stack.top(), 10)
        
        self.min_stack.push(5)
        self.assertEqual(self.min_stack.getMin(), 5)
        self.assertEqual(self.min_stack.top(), 5)
        
        self.min_stack.push(15)
        self.assertEqual(self.min_stack.getMin(), 5)
        self.assertEqual(self.min_stack.top(), 15)
        
        self.min_stack.push(2)
        self.assertEqual(self.min_stack.getMin(), 2)
        self.assertEqual(self.min_stack.top(), 2)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.getMin(), 5)
        self.assertEqual(self.min_stack.top(), 15)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.getMin(), 5)
        self.assertEqual(self.min_stack.top(), 5)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.getMin(), 10)
        self.assertEqual(self.min_stack.top(), 10)

    def test_all_same_values(self):
        """Test with all same values"""
        self.min_stack.push(5)
        self.min_stack.push(5)
        self.min_stack.push(5)
        
        self.assertEqual(self.min_stack.getMin(), 5)
        self.assertEqual(self.min_stack.top(), 5)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.getMin(), 5)
        self.assertEqual(self.min_stack.top(), 5)

    def test_descending_values(self):
        """Test with descending values"""
        self.min_stack.push(5)
        self.min_stack.push(4)
        self.min_stack.push(3)
        self.min_stack.push(2)
        self.min_stack.push(1)
        
        self.assertEqual(self.min_stack.getMin(), 1)
        self.assertEqual(self.min_stack.top(), 1)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.getMin(), 2)
        self.assertEqual(self.min_stack.top(), 2)

    def test_ascending_values(self):
        """Test with ascending values"""
        self.min_stack.push(1)
        self.min_stack.push(2)
        self.min_stack.push(3)
        self.min_stack.push(4)
        self.min_stack.push(5)
        
        self.assertEqual(self.min_stack.getMin(), 1)
        self.assertEqual(self.min_stack.top(), 5)
        
        self.min_stack.pop()
        self.assertEqual(self.min_stack.getMin(), 1)
        self.assertEqual(self.min_stack.top(), 4)

    def test_large_numbers(self):
        """Test with large numbers"""
        self.min_stack.push(1000000)
        self.min_stack.push(999999)
        self.min_stack.push(1000001)
        
        self.assertEqual(self.min_stack.getMin(), 999999)
        self.assertEqual(self.min_stack.top(), 1000001)

    def test_very_small_numbers(self):
        """Test with very small numbers"""
        self.min_stack.push(-1000000)
        self.min_stack.push(-999999)
        self.min_stack.push(-1000001)
        
        self.assertEqual(self.min_stack.getMin(), -1000001)
        self.assertEqual(self.min_stack.top(), -1000001)

    def test_empty_stack_operations(self):
        """Test operations on empty stack"""
        self.assertIsNone(self.min_stack.pop())
        self.assertIsNone(self.min_stack.top())
        self.assertIsNone(self.min_stack.getMin())

    def test_multiple_pops_empty_stack(self):
        """Test multiple pops on empty stack"""
        self.min_stack.push(5)
        self.min_stack.pop()
        self.assertIsNone(self.min_stack.pop())
        self.assertIsNone(self.min_stack.top())
        self.assertIsNone(self.min_stack.getMin())


if __name__ == "__main__":
    unittest.main()
  