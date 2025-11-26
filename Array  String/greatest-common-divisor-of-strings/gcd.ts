export class GcdStrings {
    private gcd(a: number, b: number): number {
        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    solve(str1: string, str2: string): string {
        if (str1 + str2 !== str2 + str1) return "";

        const lenG = this.gcd(str1.length, str2.length);
        return str1.substring(0, lenG);
    }
}
