import { GcdStrings } from "./gcd";

describe("GcdStrings - Greatest Common Divisor of Strings", () => {

    test("basic equal divisor string", () => {
        const solver = new GcdStrings();
        expect(solver.solve("ABCABC", "ABC")).toBe("ABC");
    });

    test("non-matching strings return empty", () => {
        const solver = new GcdStrings();
        expect(solver.solve("LEET", "CODE")).toBe("");
    });

    test("prefix repeated pattern works", () => {
        const solver = new GcdStrings();
        expect(solver.solve("ABABAB", "ABAB")).toBe("AB");
    });

    test("one-liner repeats", () => {
        const solver = new GcdStrings();
        expect(solver.solve("AAAAAA", "AA")).toBe("AA");
    });

    test("no match though lengths align", () => {
        const solver = new GcdStrings();
        expect(solver.solve("ABAB", "ABBA")).toBe("");
    });
});
