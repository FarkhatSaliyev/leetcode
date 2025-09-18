const PrefixTree = require("./index")

describe("PrefixTree (Trie)", () => {
  let trie

  beforeEach(() => {
    trie = new PrefixTree()
  })

  test("insert and search a single word", () => {
    trie.insert("apple")
    expect(trie.search("apple")).toBe(true)
    expect(trie.search("app")).toBe(false)
  })

  test("startsWith should return true for valid prefix", () => {
    trie.insert("apple")
    expect(trie.startsWith("app")).toBe(true)
    expect(trie.startsWith("apl")).toBe(false)
  })

  test("insert multiple words and search them", () => {
    trie.insert("car")
    trie.insert("cat")
    trie.insert("dog")

    expect(trie.search("car")).toBe(true)
    expect(trie.search("cat")).toBe(true)
    expect(trie.search("dog")).toBe(true)
    expect(trie.search("do")).toBe(false)
  })

  test("startsWith with multiple words", () => {
    trie.insert("car")
    trie.insert("cat")
    trie.insert("dog")

    expect(trie.startsWith("ca")).toBe(true)
    expect(trie.startsWith("car")).toBe(true)
    expect(trie.startsWith("do")).toBe(true)
    expect(trie.startsWith("z")).toBe(false)
  })

  test("empty trie should always return false", () => {
    expect(trie.search("apple")).toBe(false)
    expect(trie.startsWith("app")).toBe(false)
  })
})
