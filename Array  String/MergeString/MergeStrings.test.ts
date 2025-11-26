import { MergeStringsAlternately } from "./MergeStrings";

describe("MergeStringsAlternately", () => {
  test("merges equal length strings", () => {
    const ms = new MergeStringsAlternately();
    expect(ms.merge("abc", "xyz")).toBe("axbycz");
  });

  test("word1 shorter", () => {
    const ms = new MergeStringsAlternately();
    expect(ms.merge("ab", "pqrs")).toBe("apbqrs");
  });

  test("word2 shorter", () => {
    const ms = new MergeStringsAlternately();
    expect(ms.merge("abcd", "pq")).toBe("apbqcd");
  });

  test("empty string cases", () => {
    const ms = new MergeStringsAlternately();
    expect(ms.merge("", "abc")).toBe("abc");
    expect(ms.merge("xyz", "")).toBe("xyz");
  });
});
