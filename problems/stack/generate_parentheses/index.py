from typing import List

def generateParenthesis(n: int) -> List[str]: 
    if n == 0:
        return []

    res = []
    stack = []

    def backTrack(open: int, closed: int):
        if open == closed == n:
            res.append("".join(stack))
            return
        
        if open < n:
            stack.append('(')
            backTrack(open+1, closed)
            stack.pop()
        
        if closed < open:
            stack.append(')')
            backTrack(open, closed+1)
            stack.pop()

    backTrack(0,0)
    return res


# Test cases
if __name__ == "__main__":
    print("Testing generateParenthesis function:")
    print("=" * 50)
    
    # Test case 1: n = 1
    print(f"n = 1:")
    result1 = generateParenthesis(1)
    expected1 = ["()"]
    print(f"Expected: {expected1}")
    print(f"Got: {result1}")
    print(f"Status: {'✅ PASS' if result1 == expected1 else '❌ FAIL'}")
    print()
    
    # Test case 2: n = 2
    print(f"n = 2:")
    result2 = generateParenthesis(2)
    expected2 = ["(())", "()()"]
    print(f"Expected: {expected2}")
    print(f"Got: {result2}")
    print(f"Status: {'✅ PASS' if set(result2) == set(expected2) else '❌ FAIL'}")
    print()
    
    # Test case 3: n = 3
    print(f"n = 3:")
    result3 = generateParenthesis(3)
    expected3 = ["((()))", "(()())", "(())()", "()(())", "()()()"]
    print(f"Expected: {expected3}")
    print(f"Got: {result3}")
    print(f"Status: {'✅ PASS' if set(result3) == set(expected3) else '❌ FAIL'}")
    print()
    
    # Test case 5: n = 4 (Catalan number C(4) = 14)
    print(f"n = 4:")
    result5 = generateParenthesis(4)
    print(f"Expected: 14 combinations")
    print(f"Got: {len(result5)} combinations")
    print(f"Status: {'✅ PASS' if len(result5) == 14 else '❌ FAIL'}")
    print()
    
    # Test validation: all combinations have correct length
    print("Validating all combinations have correct length:")
    all_correct_length = True
    for n in [1, 2, 3, 4]:
        result = generateParenthesis(n)
        for combination in result:
            if len(combination) != 2 * n:
                all_correct_length = False
                print(f"❌ Wrong length: {combination} has length {len(combination)}, expected {2 * n}")
                break
        if not all_correct_length:
            break
    
    if all_correct_length:
        print("✅ All combinations have correct length")
    print()
