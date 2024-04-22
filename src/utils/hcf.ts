export function hcf(a: number, b: number): number {
    if (b) {
        return hcf(b, a % b);
    } else {
        return Math.abs(a);
    }
}