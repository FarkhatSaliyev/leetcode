const partition = require("./index") // adjust path if needed

describe("Palindrome Partitioning", () => {
  test("case 1: s = 'aab'", () => {
    const result = partition("aab")
    const expected = [["a","a","b"], ["aa","b"]]
    expect(result).toEqual(expected)
  })

  test("case 2: s = 'a'", () => {
    const result = partition("a")
    const expected = [["a"]]
    expect(result).toEqual(expected)
  })

  test("case 3: s = 'aba'", () => {
    const result = partition("aba")
    const expected = [["a","b","a"], ["aba"]]
    expect(result).toEqual(expected)
  })

  test("case 4: s = 'aaa'", () => {
    const result = partition("aaa")
    const expected = [["a","a","a"], ["a","aa"], ["aa","a"], ["aaa"]]
    expect(result).toEqual(expected)
  })

  test("case 5: empty string", () => {
    const result = partition("")
    const expected = [[]]
    expect(result).toEqual(expected)
  })
})
