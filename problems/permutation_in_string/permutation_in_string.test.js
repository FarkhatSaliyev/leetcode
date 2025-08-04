const checkInclusion = require("./permutation_in_string");

describe("checkInclusion", () => {
  test("should return true when s2 contains a permutation of s1", () => {
    expect(checkInclusion("abc", "lecabee")).toBe(true);
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
    expect(checkInclusion("abc", "lecaabee")).toBe(false);
  });

  test("should return false when s2 does not contain a permutation of s1", () => {
    expect(checkInclusion("abc", "eidboaoo")).toBe(false);
    expect(checkInclusion("hello", "ooolleoooleh")).toBe(false);
  });

  test("should handle single character strings", () => {
    expect(checkInclusion("a", "a")).toBe(true);
    expect(checkInclusion("a", "b")).toBe(false);
    expect(checkInclusion("a", "ab")).toBe(true);
  });

  test("should handle identical strings", () => {
    expect(checkInclusion("abc", "abc")).toBe(true);
    expect(checkInclusion("hello", "hello")).toBe(true);
  });

  test("should handle when s1 is longer than s2", () => {
    expect(checkInclusion("abc", "ab")).toBe(false);
    expect(checkInclusion("hello", "hi")).toBe(false);
  });

  test("should handle repeated characters", () => {
    expect(checkInclusion("aa", "baa")).toBe(true);
    expect(checkInclusion("aa", "ab")).toBe(false);
    expect(checkInclusion("aab", "baa")).toBe(true);
  });

  test("should handle edge cases with empty strings", () => {
    expect(checkInclusion("", "abc")).toBe(true); // empty string is a permutation of any string
    expect(checkInclusion("abc", "")).toBe(false);
  });

  test("should handle case with same length strings", () => {
    expect(checkInclusion("abc", "cba")).toBe(true);
    expect(checkInclusion("abc", "def")).toBe(false);
  });

  test("should handle longer strings", () => {
    expect(checkInclusion("adc", "dcda")).toBe(true);
    expect(
      checkInclusion(
        "trinitrophenylmethylnitramine",
        "dinitrophenylhydrazinetrinitrophenylmethylnitramine"
      )
    ).toBe(true);
  });

  test("should handle strings with all same characters", () => {
    expect(checkInclusion("aaa", "aaa")).toBe(true);
    expect(checkInclusion("aaa", "aaab")).toBe(true);
    expect(checkInclusion("aaa", "aab")).toBe(false);
  });

  test("should handle permutation at the beginning of s2", () => {
    expect(checkInclusion("abc", "abcde")).toBe(true);
    expect(checkInclusion("ab", "abcdef")).toBe(true);
  });

  test("should handle permutation at the end of s2", () => {
    expect(checkInclusion("abc", "deabc")).toBe(true);
    expect(checkInclusion("ab", "cdefab")).toBe(true);
  });

  test("should handle permutation in the middle of s2", () => {
    expect(checkInclusion("abc", "deabcfg")).toBe(true);
    expect(checkInclusion("ab", "cdefabgh")).toBe(true);
  });

  test("should handle multiple occurrences", () => {
    expect(checkInclusion("ab", "abab")).toBe(true);
    expect(checkInclusion("abc", "abcabc")).toBe(true);
  });

  test("should handle case with overlapping characters", () => {
    expect(checkInclusion("ab", "aab")).toBe(true);
    expect(checkInclusion("abc", "aabc")).toBe(true);
  });
});
