const minWindow = require("./minimum_window_substring");

describe("minWindow", () => {
  test("should return minimum window substring when valid substring exists", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    expect(minWindow("OUZODYXAZV", "XYZ")).toBe("YXAZ");
    expect(minWindow("a", "a")).toBe("a");
  });

  test("should return empty string when no valid substring exists", () => {
    expect(minWindow("ADOBECODEBANC", "XYZ")).toBe("");
    expect(minWindow("a", "aa")).toBe("");
    expect(minWindow("", "a")).toBe("");
  });

  test("should handle single character strings", () => {
    expect(minWindow("a", "a")).toBe("a");
    expect(minWindow("ab", "a")).toBe("a");
    expect(minWindow("ba", "a")).toBe("a");
  });

  test("should handle identical strings", () => {
    expect(minWindow("abc", "abc")).toBe("abc");
    expect(minWindow("hello", "hello")).toBe("hello");
  });

  test("should handle when s is shorter than t", () => {
    expect(minWindow("ab", "abc")).toBe("");
    expect(minWindow("a", "aa")).toBe("");
  });

  test("should handle case with all same characters", () => {
    expect(minWindow("aaa", "a")).toBe("a");
    expect(minWindow("aaa", "aa")).toBe("aa");
    expect(minWindow("aaaa", "aaa")).toBe("aaa");
  });

  test("should handle minimum window at the beginning", () => {
    expect(minWindow("ABC", "ABC")).toBe("ABC");
    expect(minWindow("ABCDEF", "ABC")).toBe("ABC");
  });

  test("should handle minimum window at the end", () => {
    expect(minWindow("DEFABC", "ABC")).toBe("ABC");
    expect(minWindow("XYZABC", "ABC")).toBe("ABC");
  });

  test("should handle minimum window in the middle", () => {
    expect(minWindow("DEFABCHIJ", "ABC")).toBe("ABC");
    expect(minWindow("XYZABCMNO", "ABC")).toBe("ABC");
  });

  test("should handle overlapping characters", () => {
    expect(minWindow("AABC", "ABC")).toBe("ABC");
    expect(minWindow("ABBC", "ABC")).toBe("ABBC");
  });

  test("should handle complex cases with multiple valid windows", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    expect(minWindow("cabwefgewcwaefgcf", "cae")).toBe("cwae");
  });

  test("should handle case with extra characters in s", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    expect(minWindow("XYZABCMNO", "ABC")).toBe("ABC");
  });

  test("should handle edge cases with empty strings", () => {
    expect(minWindow("", "")).toBe("");
    expect(minWindow("abc", "")).toBe("");
    expect(minWindow("", "abc")).toBe("");
  });

  test("should handle case with single character t", () => {
    expect(minWindow("abcdef", "a")).toBe("a");
    expect(minWindow("bcdefa", "a")).toBe("a");
    expect(minWindow("abcdef", "f")).toBe("f");
  });

  test("should handle case with all characters in t being the same", () => {
    expect(minWindow("aaa", "a")).toBe("a");
    expect(minWindow("aaa", "aa")).toBe("aa");
    expect(minWindow("aaaa", "aaa")).toBe("aaa");
  });

  test("should handle case with special characters", () => {
    expect(minWindow("!@#$%^&*()", "!@#")).toBe("!@#");
    expect(minWindow("abc123def", "123")).toBe("123");
  });
});
