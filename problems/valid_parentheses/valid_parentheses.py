def isValid(s: str) -> bool:
    stack = []

    for char in s: 
        if char in '({[':
            stack.append(char)
        else: 
            if not stack: 
                return False
            topOfStack = stack.pop()
            if topOfStack != '(' and char == ')':
                 return False
            if topOfStack != '{' and char == '}':
                 return False
            if topOfStack != '[' and char == ']':
                 return False

    return len(stack) == 0

# Test cases
if __name__ == "__main__":
    test_cases = [
        ("()", True),
        ("()[]{}", True),
        ("(]", False),
        ("([)]", False),
        ("{[]}", True),
        ("", True),
        ("(", False),
        (")", False),
        ("(((", False),
        (")))", False),
        ("({})", True),
        ("{[()]}", True)
    ]
    
    for test_input, expected in test_cases:
        result = isValid(test_input)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"{status}: isValid('{test_input}') = {result}, expected {expected}")