from typing import List
import math

def evalRPN(tokens: List[str]) -> int:
    if len(tokens) == 0:
        return 0
    
    stack = []
    
    for item in tokens:
        if item.isdigit() or (item.startswith('-') and item[1:].isdigit()):
            stack.append(int(item))
        else:
            a = stack.pop()
            b = stack.pop()
            res = 0
            
            if item == '+':
                res = b + a
            elif item == '-':
                res = b - a
            elif item == '*':
                res = b * a
            elif item == '/':
                res = math.trunc(b / a)
            
            stack.append(res)
    
    return stack.pop()

if __name__ == "__main__":
    test_tokens = ["4", "13", "5", "/", "+"]
    result = evalRPN(test_tokens)
    print(f"Testing {test_tokens}:")
    print(f"Expected: 6")
    print(f"Got: {result}")
