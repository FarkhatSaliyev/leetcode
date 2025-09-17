const letterCombinations = require("./index") // adjust path if needed

describe("Letter Combinations of a Phone Number", () => {
  test("case 1: empty string", () => {
    const result = letterCombinations("")
    const expected = []
    expect(result).toEqual(expected)
  })

  test("case 2: digits = '2'", () => {
    const result = letterCombinations("2")
    const expected = ["a", "b", "c"]
    expect(result).toEqual(expected)
  })

  test("case 3: digits = '23'", () => {
    const result = letterCombinations("23")
    const expected = [
      "ad","ae","af",
      "bd","be","bf",
      "cd","ce","cf"
    ]
    expect(result).toEqual(expected)
  })

  test("case 4: digits = '7'", () => {
    const result = letterCombinations("7")
    const expected = ["p", "q", "r", "s"]
    expect(result).toEqual(expected)
  })

  test("case 5: digits = '79'", () => {
    const result = letterCombinations("79")
    const expected = [
      "pw","px","py","pz",
      "qw","qx","qy","qz",
      "rw","rx","ry","rz",
      "sw","sx","sy","sz"
    ]
    expect(result).toEqual(expected)
  })

  test("case 6: digits = '234'", () => {
    const result = letterCombinations("234")
    expect(result.length).toBe(27) // 3*3*3
    expect(result).toContain("adg")
    expect(result).toContain("cfi")
  })
})
