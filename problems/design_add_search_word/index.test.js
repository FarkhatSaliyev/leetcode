const { WordDictionary } = require("./index")

describe("WordDictionary", () => {
  let dict

  beforeEach(() => {
    dict = new WordDictionary()
  })

  test("should add and search exact words", () => {
    dict.addWord("bad")
    dict.addWord("dad")
    dict.addWord("mad")

    expect(dict.search("bad")).toBe(true)
    expect(dict.search("dad")).toBe(true)
    expect(dict.search("mad")).toBe(true)
    expect(dict.search("pad")).toBe(false) // not added
  })

  test("should handle wildcards", () => {
    dict.addWord("bad")
    dict.addWord("dad")
    dict.addWord("mad")

    expect(dict.search(".ad")).toBe(true) // matches all 3
    expect(dict.search("b..")).toBe(true) // matches "bad"
    expect(dict.search("..d")).toBe(true) // matches all ending with "d"
    expect(dict.search("..a")).toBe(false) // no word like that
  })

  test("should handle words of different lengths", () => {
    dict.addWord("me")
    dict.addWord("mad")

    expect(dict.search("me")).toBe(true)
    expect(dict.search("m.")).toBe(true) // matches "me"
    expect(dict.search("..")).toBe(true) // matches "me"
    expect(dict.search("...")).toBe(true) // matches "mad"
    expect(dict.search("....")).toBe(false) // no 4-letter word
  })

  test("should return false for empty dictionary", () => {
    expect(dict.search("a")).toBe(false)
    expect(dict.search(".")).toBe(false)
  })
})
