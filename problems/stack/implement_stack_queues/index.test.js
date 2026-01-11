const MyStack = require('./index');

describe('MyStack', () => {
  let stack;

  beforeEach(() => {
    stack = new MyStack();
  });

  test('stack should be empty initially', () => {
    expect(stack.empty()).toBe(true);
  });

  test('push adds elements to the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
  });

  test('pop removes and returns the top element', () => {
    stack.push(10);
    stack.push(20);
    const popped = stack.pop();
    expect(popped).toBe(20);
    expect(stack.top()).toBe(10);
  });

  test('top returns top element without removing it', () => {
    stack.push(5);
    expect(stack.top()).toBe(5);
    expect(stack.empty()).toBe(false);
  });

  test('empty returns false when stack has elements', () => {
    stack.push(1);
    expect(stack.empty()).toBe(false);
  });

  test('pop on empty stack returns undefined', () => {
    expect(stack.pop()).toBeUndefined();
  });

  test('top on empty stack returns undefined', () => {
    expect(stack.top()).toBeUndefined();
  });

  test('push and pop multiple elements', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });
});
