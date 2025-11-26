import { GcdStrings } from "./gcd";

const solver = new GcdStrings();

const out = solver.solve("ABCABC", "ABC");
console.log("GCD of strings:", out);

console.log(solver.solve("ABABAB", "ABAB"));
console.log(solver.solve("LEET", "CODE"));
